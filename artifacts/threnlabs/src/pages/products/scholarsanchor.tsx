import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useInView, GridBackground, RadialGlow, SectionLabel, PageShell } from "@/lib/shared";
import { SEO } from "@/components/seo";
import {
  Calendar,
  BookOpen,
  Sparkles,
  Clock,
  Database,
  GraduationCap,
  CheckCircle,
  MessageSquare,
  Shield,
  UserCheck,
  Coins,
  ArrowRight,
  UploadCloud,
  FileSpreadsheet,
  Layers,
  Lock,
  Cpu,
  Brain,
  Award,
  Search,
  Plus
} from "lucide-react";

// Interactive Mockups Container
function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState<"scheduler" | "doubt-solver" | "ingestion" | "refueling">("scheduler");

  // State for Scheduler Mock
  const [schedulingStatus, setSchedulingStatus] = useState<"idle" | "running" | "success">("idle");
  const [schedulerProgress, setSchedulerProgress] = useState(0);

  // State for Doubt Solver Mock
  const [doubtInput, setDoubtInput] = useState("");
  const [doubtHistory, setDoubtHistory] = useState<Array<{ sender: "user" | "ai"; text: string; code?: string }>>([
    { sender: "ai", text: "Hello! I am BenchRex, your AI academic assistant. Ask me any conceptual question or paste a problem." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [savedNotes, setSavedNotes] = useState<string[]>([]);
  const [credits, setCredits] = useState(45);

  // State for Knowledge Ingestion
  const [ingestFile, setIngestFile] = useState<string | null>(null);
  const [ingestStep, setIngestStep] = useState<"idle" | "parsing" | "indexing" | "complete">("idle");

  // State for Refueling
  const [testScore, setTestScore] = useState(85);
  const [refuelClaimed, setRefuelClaimed] = useState(false);

  // Trigger Scheduling Simulation
  const runScheduler = () => {
    if (schedulingStatus !== "idle") return;
    setSchedulingStatus("running");
    setSchedulerProgress(0);
  };

  useEffect(() => {
    if (schedulingStatus === "running") {
      const interval = setInterval(() => {
        setSchedulerProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setSchedulingStatus("success");
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
    return;
  }, [schedulingStatus]);

  // Trigger Doubt Solver Simulation
  const handleAskDoubt = (presetQuestion?: string) => {
    const question = presetQuestion || doubtInput;
    if (!question.trim() || isTyping || credits < 5) return;

    setDoubtInput("");
    setCredits((c) => c - 5);
    setDoubtHistory((prev) => [...prev, { sender: "user", text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      let aiText = "";
      let aiCode = undefined;

      if (question.toLowerCase().includes("time complexity")) {
        aiText = "Based on your syllabus (Data Structures - CSE 202), the time complexity of building a heap from an unsorted array of size N is O(N). This is achieved using the bottom-up heapify method starting from the first non-leaf node down to the root.";
        aiCode = `// Heapify algorithm time complexity proof:\n// Height h of node i is log(N/i). \n// Total work S = sum_{h=1}^{log N} (h * N / 2^(h+1)) = O(N)`;
      } else if (question.toLowerCase().includes("balance sheet")) {
        aiText = "Under International Accounting Standard 1 (IAS 1), the balance sheet must structure assets, liabilities, and equity clearly. The primary equation is: Assets = Liabilities + Owners' Equity. Let's inspect the balance sheet guidelines mapped in your Accounting course.";
      } else {
        aiText = `Here is the verified institutional resource reference matching your query. We have resolved this doubt using verified lecture notes (Unit 3). Please let me know if you would like me to escalate this to Professor Reeves.`;
      }

      setDoubtHistory((prev) => [...prev, { sender: "ai", text: aiText, code: aiCode }]);
      setIsTyping(false);
    }, 1200);
  };

  // Trigger Ingestion Simulation
  const handleIngest = (fileName: string) => {
    setIngestFile(fileName);
    setIngestStep("parsing");
    setTimeout(() => {
      setIngestStep("indexing");
      setTimeout(() => {
        setIngestStep("complete");
      }, 1000);
    }, 1000);
  };

  // Trigger Refuel Simulation
  const handleRefuel = () => {
    if (refuelClaimed) return;
    setRefuelClaimed(true);
    setCredits((c) => c + Math.floor(testScore / 5));
  };

  return (
    <div className="w-full rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
      {/* Playground tabs */}
      <div className="flex border-b border-border bg-muted/20 overflow-x-auto scrollbar-none">
        {[
          { id: "scheduler", label: "CalendarSync Engine", icon: Calendar },
          { id: "doubt-solver", label: "BenchRex doubt-solver", icon: Sparkles },
          { id: "ingestion", label: "Knowledge Ingest", icon: UploadCloud },
          { id: "refueling", label: "Credit Refuel", icon: Coins }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                isActive
                  ? "border-primary text-foreground bg-primary/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-current"}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="p-6 md:p-8 min-h-[22.5rem] flex flex-col justify-between">
        {/* Scheduler Simulator */}
        {activeTab === "scheduler" && (
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                  Sustained Solver Active
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2">Constraint-Based Automatic Timetable Generation</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Orchestrate rooms, faculty capacities, and cohorts conflict-free.
                </p>
              </div>
              <button
                onClick={runScheduler}
                disabled={schedulingStatus === "running"}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  schedulingStatus === "running"
                    ? "bg-primary/20 text-primary cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm active:scale-95"
                }`}
              >
                {schedulingStatus === "idle" && "Generate Schedule"}
                {schedulingStatus === "running" && "Solving Constraints..."}
                {schedulingStatus === "success" && "Re-generate Schedule"}
              </button>
            </div>

            {/* Grid layout representing calendar status */}
            <div className="relative rounded-xl border border-border bg-muted/10 p-4 overflow-hidden">
              {schedulingStatus === "running" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px] z-10 space-y-3">
                  <div className="w-16 h-1 bg-muted rounded overflow-hidden">
                    <div className="h-full bg-primary rounded transition-all duration-200" style={{ width: `${schedulerProgress}%` }} />
                  </div>
                  <span className="text-xs font-mono text-primary">Satisfying {120 + schedulerProgress * 3} variables...</span>
                </div>
              )}

              <div className="grid grid-cols-5 gap-2.5">
                {Array.from({ length: 15 }).map((_, i) => {
                  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
                  const day = days[i % 5];
                  const slots = ["9:00 AM", "11:30 AM", "2:00 PM"];
                  const slot = slots[Math.floor(i / 5)];

                  return (
                    <div
                      key={i}
                      className={`rounded-lg border p-3 flex flex-col justify-between transition-all duration-500 min-h-[4.5rem] ${
                        schedulingStatus === "success"
                          ? "border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50"
                          : "border-border bg-transparent"
                      }`}
                    >
                      <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground">
                        <span>{day}</span>
                        <span>{slot}</span>
                      </div>
                      {schedulingStatus === "success" ? (
                        <div className="space-y-1 mt-2">
                          <div className="w-full h-3 rounded-sm bg-primary/20 border border-primary/30 flex items-center px-1">
                            <span className="text-[8px] font-semibold text-primary truncate">CSE-102 (Room 402)</span>
                          </div>
                          <div className="w-2/3 h-2.5 rounded-sm bg-emerald-500/10 border border-emerald-500/20 flex items-center px-1">
                            <span className="text-[7px] text-emerald-600 truncate">Dr. Reeves</span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-[10px] text-muted-foreground/60 italic mt-2">Unassigned</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                Algorithm: Google OR-Tools CP-SAT
              </span>
              <span>
                {schedulingStatus === "success" ? "Conflict Resolution: 100% Correct" : "Status: Idle"}
              </span>
            </div>
          </div>
        )}

        {/* BenchRex doubt-solver Simulator */}
        {activeTab === "doubt-solver" && (
          <div className="space-y-5">
            {/* Header info */}
            <div className="flex justify-between items-center bg-muted/10 border border-border rounded-xl px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold text-foreground">BenchRex Reasoning Platform</span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-muted-foreground">Rate limit: 20 req/hr</span>
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded border border-primary/20 text-primary font-mono font-bold">
                  <Coins className="w-3 h-3 text-primary" />
                  {credits} Credits
                </div>
              </div>
            </div>

            {/* Chatbox layout */}
            <div className="h-56 rounded-xl border border-border bg-card p-4 overflow-y-auto space-y-3 flex flex-col justify-between">
              <div className="space-y-3 overflow-y-auto flex-1 scrollbar-none pr-2">
                {doubtHistory.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground border border-border rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                      {msg.code && (
                        <pre className="mt-2.5 p-2 rounded bg-muted border border-border font-mono text-[10px] text-primary overflow-x-auto leading-normal">
                          {msg.code}
                        </pre>
                      )}
                    </div>
                    {msg.sender === "ai" && i > 0 && (
                      <div className="flex gap-3 mt-1.5 ml-2">
                        <button
                          onClick={() => {
                            if (!savedNotes.includes(msg.text)) {
                              setSavedNotes([...savedNotes, msg.text]);
                            }
                          }}
                          className="text-[9px] font-mono text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                        >
                          + Save to Notes Board
                        </button>
                        <a
                          href="/company#contact"
                          className="text-[9px] font-mono text-primary/95 hover:text-primary transition-colors uppercase tracking-wider"
                        >
                          Escalate to Expert
                        </a>
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-75" />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-150" />
                    <span className="font-mono text-[10px] text-muted-foreground/80 ml-1">BenchRex is reasoning...</span>
                  </div>
                )}
              </div>

              {savedNotes.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-border flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider">Notes Board:</span>
                  {savedNotes.map((note, idx) => (
                    <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-muted border border-border text-foreground/80 max-w-[150px] truncate">
                      {note}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Input bar / Preset chips */}
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={doubtInput}
                  onChange={(e) => setDoubtInput(e.target.value)}
                  placeholder="Ask BenchRex a conceptual question..."
                  className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-xs text-foreground placeholder-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                  onKeyDown={(e) => e.key === "Enter" && handleAskDoubt()}
                />
                <button
                  onClick={() => handleAskDoubt()}
                  disabled={isTyping}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-5 py-2.5 text-xs font-bold transition-all active:scale-95"
                >
                  Ask
                </button>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-mono text-muted-foreground uppercase">Try:</span>
                <button
                  onClick={() => handleAskDoubt("What is the time complexity of Heap Sort?")}
                  className="text-[10px] px-2.5 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  Heap Sort Time Complexity
                </button>
                <button
                  onClick={() => handleAskDoubt("Explain IAS 1 Balance Sheet structure")}
                  className="text-[10px] px-2.5 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  IAS 1 Balance Sheet Rules
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Knowledge Ingest Simulator */}
        {activeTab === "ingestion" && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                Source Ingestion & Parsing
              </span>
              <h3 className="text-xl font-bold text-foreground mt-2">Convert Raw Educational Media to AI Ready Knowledge</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Our parsing pipeline breaks down textbooks, videos, and syllabus schedules into context vectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-dashed border-border bg-muted/10 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all hover:bg-muted/20">
                <UploadCloud className="w-10 h-10 text-primary/60 mb-3" />
                <h4 className="text-sm font-semibold text-foreground mb-1">Upload Syllabus, Reference Books, or Lecture Notes</h4>
                <p className="text-xs text-muted-foreground mb-4 max-w-[280px]">
                  PDF, DOCX, Markdown or URL links parsed directly into BenchRex embeddings.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleIngest("Algorithms_Intro.pdf")}
                    className="text-xs px-3.5 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
                  >
                    Simulate PDF Upload
                  </button>
                  <button
                    onClick={() => handleIngest("Lecture_10_Syllabus.docx")}
                    className="text-xs px-3.5 py-1.5 rounded bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
                  >
                    Simulate DOCX Upload
                  </button>
                </div>
              </div>

              {/* Status / Output Display */}
              <div className="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Parsing Pipeline Monitor</h4>
                  {ingestStep === "idle" ? (
                    <div className="text-xs text-muted-foreground italic flex items-center justify-center h-28 border border-border rounded-lg">
                      Waiting for file upload trigger...
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-foreground font-semibold font-mono">{ingestFile}</span>
                        <span className="text-primary font-mono font-bold capitalize animate-pulse">{ingestStep}</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { step: "parsing", label: "Optical character extraction & semantic mapping" },
                          { step: "indexing", label: "Generating concept vector graph & relations" },
                          { step: "complete", label: "Ingested successfully into BenchRex doubt-solver" }
                        ].map((s) => {
                          const isActive = ingestStep === s.step;
                          const isFinished =
                            s.step === "parsing" ||
                            (s.step === "indexing" && ingestStep !== "parsing") ||
                            ingestStep === "complete";

                          return (
                            <div key={s.step} className="flex gap-2.5 items-start text-xs">
                              {isFinished ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              ) : isActive ? (
                                <Cpu className="w-4 h-4 text-primary animate-spin flex-shrink-0 mt-0.5" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-border flex-shrink-0 mt-0.5" />
                              )}
                              <div>
                                <span className={`font-semibold capitalize block ${isFinished ? "text-foreground" : "text-muted-foreground/60"}`}>
                                  {s.step}
                                </span>
                                <span className="text-[10px] text-muted-foreground leading-snug">{s.label}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <div className="text-[10px] text-muted-foreground font-mono flex items-center justify-between border-t border-border pt-3 mt-4">
                  <span>Engine: Threnlabs-VectorParser v1.2</span>
                  <span>Isolation: FERPA Secure</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Credit Refueling Simulator */}
        {activeTab === "refueling" && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                Score-Based Resource Allocation
              </span>
              <h3 className="text-xl font-bold text-foreground mt-2">Test Score Credit Refueling</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Gamify study efforts. Connect test performance logs to BenchRex API token rewards automatically.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-muted/10 p-5 space-y-4">
                <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Test Records Logger</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground font-medium">Select Test Performance:</span>
                    <span className="text-foreground font-bold font-mono">{testScore}% Score</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={testScore}
                    onChange={(e) => {
                      if (!refuelClaimed) setTestScore(Number(e.target.value));
                    }}
                    disabled={refuelClaimed}
                    className="w-full accent-primary h-1 bg-muted rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-muted-foreground">
                    <span>Passing: 50%</span>
                    <span>Excellent: 90%+</span>
                  </div>
                  <div className="p-3.5 bg-primary/5 rounded-lg border border-primary/10 text-xs text-foreground/95 leading-relaxed">
                    <Award className="w-4 h-4 text-yellow-500 inline-block mr-1.5 -mt-0.5" />
                    <strong>Refuel Reward Rule:</strong> Every 5 percentage points earned above passing adds 1 credit (e.g. {testScore}% = {Math.floor(testScore / 5)} credits).
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Student Wallet</h4>
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block font-mono">Current Balance</span>
                      <span className="text-3xl font-black text-foreground font-mono flex items-center gap-1.5 mt-1">
                        <Coins className="w-6 h-6 text-primary" />
                        {credits} <span className="text-xs text-muted-foreground font-normal font-sans">tokens</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase block font-mono text-right">Refuel Status</span>
                      {refuelClaimed ? (
                        <span className="text-xs px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full font-bold mt-1 block">
                          Claimed
                        </span>
                      ) : (
                        <span className="text-xs px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 rounded-full font-bold mt-1 block">
                          Ready to Claim
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Earned credits:</span>
                      <span className="font-mono text-foreground font-semibold">+{Math.floor(testScore / 5)} credits</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Logged Subject:</span>
                      <span className="font-mono text-foreground font-semibold">Discrete Mathematics</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleRefuel}
                  disabled={refuelClaimed}
                  className={`w-full py-3 rounded-lg text-xs font-bold mt-6 transition-all ${
                    refuelClaimed
                      ? "bg-muted text-muted-foreground/60 cursor-not-allowed border border-border"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-sm active:scale-95"
                  }`}
                >
                  {refuelClaimed ? "Credits Refueled Successfully" : "Claim Credits from Test Score"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main Page Component
export default function ScholarsAnchorPage() {
  const { ref, inView } = useInView();

  return (
    <PageShell>
      <SEO
        title="ScholarsAnchor | End-to-End AI Operations & Doubt Solving Platform"
        description="Empower educational institutions with ScholarsAnchor. Features unified CalendarSync timetabling solver, BenchRex AI doubt solver, attendance logger, notes board, and content parser."
        canonical="https://threnlabs.com/products/scholarsanchor"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ScholarsAnchor",
          "operatingSystem": "All",
          "applicationCategory": "EducationalApplication",
          "description": "Complete E2E AI control platform for educational institutions, combining automated timetabling, student dashboard, and reasoning doubt solvers.",
          "offers": {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD"
          }
        }}
      />

      {/* Hero Section */}
      <section ref={ref} className="relative pt-24 pb-24 px-6 lg:px-8 overflow-hidden">
        <RadialGlow color="blue" className="w-[43.75rem] h-[31.25rem] -top-20 left-0" />
        <GridBackground />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div
            className="transition-all duration-700 flex flex-col items-center"
            style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Products
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-6">
              ScholarsAnchor
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-bold mb-6">
              E2E AI Control Suite for Educational Institutions
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed mb-12 mx-auto">
              Revamped and unified. ScholarsAnchor gives schools, colleges, and universities absolute command over operational scheduling with <strong>CalendarSync</strong> and conceptual academic doubt-solving with <strong>BenchRex</strong>.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                href="/company#contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground border border-primary font-semibold rounded-2xl transition-all hover:scale-105 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] text-lg active:scale-95"
              >
                Connect with our Team
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 px-10 py-5 border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground rounded-2xl transition-all text-lg font-medium"
              >
                Interactive Playground
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Components Section */}
      <section className="py-20 px-6 lg:px-8 border-y border-border bg-muted/10 relative overflow-hidden">
        <RadialGlow color="violet" className="w-[50rem] h-[37.5rem] bottom-0 right-0 translate-x-1/3" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel color="blue">Product Integration</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">One Integrated Operational Canopy</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              ScholarsAnchor compiles and encapsulates the two key pillars of modern educational AI: scheduling automation and reasoning-first knowledge assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* CalendarSync Card */}
            <div className="relative rounded-3xl border border-border bg-card p-8 lg:p-10 flex flex-col justify-between overflow-hidden group hover:border-primary/30 transition-all duration-300 shadow-sm">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">CalendarSync Engine</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Sustained, algorithm-grounded automatic scheduling. Configures complex parameters like teacher hourly load targets, course credits, student cohort priorities, and classroom availabilities to generate complete conflict-free timetables.
                </p>
              </div>
              <ul className="space-y-3.5 border-t border-border pt-6 mt-4">
                {[
                  "CP-SAT Constraint Solver optimization",
                  "Real-time resource conflicts detection",
                  "Department-level coordination parameters override"
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-xs text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* BenchRex Card */}
            <div className="relative rounded-3xl border border-border bg-card p-8 lg:p-10 flex flex-col justify-between overflow-hidden group hover:border-primary/30 transition-all duration-300 shadow-sm">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">BenchRex Platform</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  A designated student doubt-solving workspace leveraging deep model reasoning. It uses semantic context and reference indexes to assist students in understanding complex topics without losing the baseline academic curriculum guidelines.
                </p>
              </div>
              <ul className="space-y-3.5 border-t border-border pt-6 mt-4">
                {[
                  "Reasoning doubts platform with attribution",
                  "Expert support escalation for specific complex doubts",
                  "Digital Notes Board to save doubts and solutions"
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-xs text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demonstration Section */}
      <section id="interactive-demo" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel color="blue">Live Simulator</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Experience ScholarsAnchor Operational Flow</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Test drive the interface, build schedules, resolve reasoning doubts with BenchRex, or refuel credits.
            </p>
          </div>

          <InteractivePlayground />
        </div>
      </section>

      {/* Complete E2E Control Suite Features */}
      <section className="py-24 px-6 lg:px-8 bg-muted/10 border-t border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel color="blue">Core Platform Features</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">The Complete Administrative Canopy</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
              Everything required to operationalize artificial intelligence safely in schools, colleges, and universities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Automatic Scheduling",
                desc: "Sustained algorithm-grounded scheduling powered by CP-SAT solver constraint optimization, ensuring balanced lecture distributions."
              },
              {
                icon: Cpu,
                title: "Empowered AI Assistant",
                desc: "An AI assistant built directly into the school system, empowered with diagnostic tools to retrieve class rosters, room layouts, and calendars."
              },
              {
                icon: UserCheck,
                title: "Attendance & Test Logger",
                desc: "Automated logs for lecture attendance and test records to continuously feed performance analytics back into student tracking dashboards."
              },
              {
                icon: GraduationCap,
                title: "Student Dashboard",
                desc: "Interactive dashboard displaying scores, timetables, active credit token levels, doubt solving stats, and academic bookmarks."
              },
              {
                icon: Database,
                title: "Content & Source Parsers",
                desc: "Ingestion framework converting raw textbooks, PDFs, Markdown notes, or links into clean, AI-ready semantic knowledge graphs."
              },
              {
                icon: Shield,
                title: "Rate Limiting & Safety",
                desc: "Strict rate limiting on BenchRex queries to protect API budgets, with full logs and filtering for strict FERPA and COPPA compliance."
              },
              {
                icon: MessageSquare,
                title: "Expert Escalation Support",
                desc: "Ensures no student is left stranded. Escalate complex conceptual doubts directly to human faculty or campus tutors."
              },
              {
                icon: Layers,
                title: "The Notes Board",
                desc: "Save doubt logs, AI explanations, code snippets, and graphs in one secure revision hub for students."
              },
              {
                icon: Coins,
                title: "Credit Refueling System",
                desc: "Allocate doubt-solving credits automatically based on test scores, motivating students to improve their grades to earn additional AI support."
              }
            ].map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/25 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 border-t border-border relative overflow-hidden">
        <RadialGlow color="blue" className="w-[37.5rem] h-[25rem] top-0 left-1/2 -translate-x-1/2 opacity-40" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5 leading-tight">
            Ready to empower your institution with <span className="text-primary">ScholarsAnchor?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Get in touch with our operations team to set up an early pilot program. We will integrate your calendars, test scoring APIs, and learning management systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/company#contact"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-sm hover:scale-105 active:scale-95"
            >
              Contact our team
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground rounded-xl transition-all font-semibold"
            >
              View other products
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
