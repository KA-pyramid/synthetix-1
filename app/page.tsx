"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Brain,
  Building2,
  TrendingUp,
  Clock,
  Map as MapIcon,
  RefreshCw,
  FileCheck,
  ArrowRight,
  Check,
  X,
  Quote,
  ChevronDown,
  Menu,
  Search,
  Network,
  LayoutGrid,
  Hammer,
  ShieldCheck,
  Scale,
} from "lucide-react";
import RainingLettersHero from "@/components/ui/modern-animated-hero-section";
import { SolutionsTabs } from "@/components/ui/feature-tabs";
import { RadialOrbitalTimeline } from "@/components/ui/radial-orbital-timeline";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "Agents", href: "#agents" },
  { label: "Governance", href: "#governance" },
  { label: "Why Synthetix", href: "#why" },
];

const STATS = [
  { value: 300, suffix: "%", label: "Faster greenfield delivery cycles" },
  { value: 120, suffix: "+", label: "Reduction in legacy discovery effort" },
  { value: 100, suffix: "%", label: "Traceable artifacts, decisions, and gates" },
  { value: 24, suffix: "/7", label: "Continuous execution across the estate" },
  { value: 9, suffix: "/10", label: "Decisions resolved autonomously", raw: "09/10" },
];

const PLATFORM_CAPABILITIES = [
  {
    icon: Shield,
    title: "Governed by Design",
    body: "Every agent action is policy-gated, evidence-backed, and reversible. Synthetix enforces governance as part of execution.",
  },
  {
    icon: Brain,
    title: "Estate-Wide Intelligence",
    body: "Synthetix reads the full estate including code, IaC, topology, integrations, and data schema. It builds a live knowledge graph that survives change and powers every downstream agent decision.",
  },
  {
    icon: Building2,
    title: "Built for Regulated Industries",
    body: "Air-gappable deployment, four-tier change classification, HITL checkpoints, and signed audit trails designed for banking, financial services, insurance, and healthcare operating environments.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Business Outcomes",
    body: "From compressed discovery timelines to reduced L2/L3 support burden, every Synthetix capability maps to a cost driver your CFO and CIO can track against a business case.",
  },
];

const PIPELINE_STAGES = [
  {
    id: 1,
    title: "Discover",
    icon: Search,
    content:
      "Agents crawl the full estate including application code, IaC, network topology, integrations, and data schemas, building a verified inventory before a single line of migration code is written.",
    relatedIds: [2],
  },
  {
    id: 2,
    title: "Analyze",
    icon: Network,
    content:
      "Synthetix constructs a path-level knowledge graph with confidence scoring across every system dependency, concentration risk, and regulatory touchpoint.",
    relatedIds: [1, 3],
  },
  {
    id: 3,
    title: "Architect",
    icon: LayoutGrid,
    content:
      "Target-state architecture is generated from verified estate intelligence, infrastructure constraints, and business intent. Risk-adjusted delivery wave sequencing your PMO can present to the steering committee.",
    relatedIds: [2, 4],
  },
  {
    id: 4,
    title: "Build",
    icon: Hammer,
    content:
      "Specialist generation agents execute migration in parallel waves. Each unit is reviewed by peer agents before it advances, with full module-level state tracking in Conductor.",
    relatedIds: [3, 5],
  },
  {
    id: 5,
    title: "Verify",
    icon: ShieldCheck,
    content:
      "The Examiner agent generates and runs tests across units, integration, and contract surfaces. Coverage gating prevents promotion until quality thresholds are met.",
    relatedIds: [4, 6],
  },
  {
    id: 6,
    title: "Govern",
    icon: Scale,
    content:
      "The Gatekeeper agent classifies every change across four tiers, enforces policy, signs evidence, and records a complete, audit-ready decision trail.",
    relatedIds: [5],
  },
];

const MARQUEE_ITEMS = [
  "Governed",
  "Traceable",
  "Auditable",
  "Reversible",
  "Evidence-Backed",
  "Policy-Gated",
  "Enterprise-Ready",
];

const OTHER_AI_TOOLS = [
  "Assist individual developers at file level",
  "Prompt-driven, one task at a time",
  "No memory or context between sessions",
  "Limited auditability and governance",
  "Cloud-only deployment models",
  "No estate-wide system comprehension",
];

const SYNTHETIX_TRAITS = [
  "Orchestrates governed delivery end-to-end",
  "Estate-wide context across code, infra, data, and integrations",
  "Signed provenance and policy gates on every action",
  "Four-tier change classification with reversible delivery waves",
  "Air-gappable for regulated and sovereign environments",
  "Specialist agents that review each output",
];

const AGENTS = [
  {
    name: "Conductor",
    body: "Portfolio orchestration across every module, every delivery state, and every business function from Discovered to Sealed.",
  },
  {
    name: "Cartographer",
    body: "Path-level comprehension of legacy code and IaC across Java, COBOL, VB6, PHP, Terraform and beyond.",
  },
  {
    name: "Architect",
    body: "Target-state architecture generation synthesized from verified estate intelligence, infrastructure footprint, and business intent.",
  },
  {
    name: "Examiner",
    body: "Native test generation and execution with coverage gating that reflects real system behavior across units, integration, and contract surfaces.",
  },
  {
    name: "Gatekeeper",
    body: "Four-tier change classification with promote-gate semantics, versioned, reversible, and fully audited for regulated industries.",
  },
  {
    name: "Mentor",
    body: "Real-time guidance in the IDE that captures tribal knowledge as it is used and feeds it back into the platform.",
  },
  {
    name: "Estimator",
    body: "Risk-adjusted timelines and work breakdowns your CFO and PMO can defend in the steering committee.",
  },
  {
    name: "Critic",
    body: "Inline review that catches hallucinations, scope drift, and unsafe migrations before anything reaches sign-off.",
  },
  {
    name: "Scout",
    body: "Evidence-grounded intelligence at the pace the engagement demands.",
  },
];

const PROOF_POINTS = [
  {
    metric: "184 modules mapped",
    label:
      "Modernization Run: Legacy estate analyzed with dependency maps, risk scoring, evidence edges, and governed migration waves.",
  },
  {
    metric: "Policy gates applied",
    label:
      "Governance Run: Policy gates, human checkpoints, signed evidence, and reversible change classification applied across the workflow.",
  },
  {
    metric: "Faster RCA and triage",
    label:
      "Support Run: Production incidents triaged with root-cause paths, fix recommendations, and refreshed runbooks.",
  },
  {
    metric: "Policy-gated remediation",
    label:
      "Infrastructure Run: IaC, topology, drift, and change impact assessed before remediation reaches approval.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Synthetix is designed for enterprises that need AI execution with auditability, traceability, and human control built into every workflow.",
    attribution: "Enterprise AI Governance — Synthetix Platform View",
  },
  {
    quote:
      "From requirements and architecture to build, verification, support, and operations, Synthetix compresses the full lifecycle into one governed execution layer.",
    attribution: "Enterprise Delivery — Synthetix Platform View",
  },
  {
    quote:
      "Every artifact, decision, test, gate, and promotion can be traced back to source evidence, giving leaders confidence in AI-assisted execution.",
    attribution: "Enterprise Modernization — Synthetix Platform View",
  },
];

const BUSINESS_CASE = [
  {
    icon: Clock,
    title: "Legacy Discovery",
    body: "Compress discovery into days with agent-led estate analysis.",
  },
  {
    icon: MapIcon,
    title: "Architecture Planning",
    body: "Evidence-backed architecture, wave plans, and risk-adjusted estimates from one knowledge graph.",
  },
  {
    icon: RefreshCw,
    title: "Rework",
    body: "Critic + Gatekeeper agents and gated reviews cut rework before promotion.",
  },
  {
    icon: FileCheck,
    title: "Governance Documentation",
    body: "Provenance, policy gates, and decision trails captured by default.",
  },
];

const FAQS = [
  {
    q: "How is Synthetix different from GitHub Copilot or other AI coding assistants?",
    a: "Copilots assist individual developers at file level. Synthetix orchestrates governed delivery across the full lifecycle including discovery, architecture, build, verification, and governance with estate-wide context and signed provenance on every action. It is a command layer, not a productivity add-on.",
  },
  {
    q: "Can Synthetix be deployed in air-gapped or on-premises environments?",
    a: "Yes. Synthetix is designed for regulated enterprise environments including banking, insurance, healthcare, and sovereign systems where cloud-only deployments are not permissible. Full air-gap and on-premises deployment options are available.",
  },
  {
    q: "How does Synthetix handle governance and compliance requirements?",
    a: "Every Synthetix action passes through configurable policy gates, HITL checkpoints, and four-tier change classification. All agent decisions are signed, traceable to source evidence, and output an audit-ready decision trail by default, not assembled after the fact.",
  },
  {
    q: "What legacy technology stacks does Synthetix support?",
    a: "Synthetix comprehends a broad range of legacy and modern technology stacks including COBOL, VB6, Java, Kotlin, PHP, Terraform, Ansible, CloudFormation, and Pulumi across mainframe, on-premises, hybrid, and cloud environments.",
  },
  {
    q: "How long does a typical enterprise modernization engagement take to reach value?",
    a: "Synthetix platform is structured to compress pre-delivery effort, discovery, dependency mapping, and architecture planning, from weeks or months to days. A representative proof run can be scoped and executed on a defined estate segment to establish baseline metrics before full program commitment.",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "How It Works", href: "#platform" },
      { label: "Conductor", href: "#agents" },
      { label: "Atlas", href: "#platform" },
      { label: "Integrations", href: "#platform" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Greenfield", href: "#solutions" },
      { label: "Modernization", href: "#solutions" },
      { label: "App Support", href: "#solutions" },
      { label: "Infra Support", href: "#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Synthetix", href: "#why" },
      { label: "Governance", href: "#governance" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "border-b border-neutral-200" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-semibold text-brand-black">
          Synthetix
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[--text-secondary] transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-lg bg-brand-blue px-5 py-2.5 font-body text-sm font-medium text-white transition-colors hover:bg-brand-blue-mid"
          >
            Request a Demo
          </a>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <Menu className="h-6 w-6 text-brand-black" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-[--text-secondary] hover:text-brand-blue"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-brand-blue px-5 py-2.5 text-center font-body text-sm font-medium text-white"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <RainingLettersHero
      eyebrow="Governed Agentic Execution Platform"
      title="Govern Build Revamp Operate"
      subtitle="Synthetix is a governed agentic execution platform for enterprise software delivery. Specialist agents run discovery, architecture, build, verification, and governance as one coordinated pipeline with policy gates and human oversight at every critical juncture."
      primaryCta={{ label: "Request a Demo", href: "#contact" }}
      secondaryCta={{ label: "Explore Synthetix", href: "#platform" }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Stats band                                                          */
/* ------------------------------------------------------------------ */

function StatItem({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const count = useCountUp(stat.value, inView);
  const display = stat.raw
    ? inView
      ? stat.raw
      : "00/10"
    : `${count}${stat.suffix}`;

  return (
    <div ref={ref} className="flex flex-col items-center px-6 py-8 text-center">
      <span className="font-display text-4xl font-bold text-brand-blue md:text-5xl">
        {display}
      </span>
      <span className="mt-2 font-body text-sm text-[--text-secondary]">
        {stat.label}
      </span>
    </div>
  );
}

function StatsBand() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Manifesto                                                           */
/* ------------------------------------------------------------------ */

function NetworkIllustration() {
  const nodes = [
    [20, 30], [60, 15], [110, 45], [160, 20], [200, 60],
    [40, 90], [90, 110], [140, 95], [190, 130], [70, 150],
    [130, 160], [30, 180],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5], [5, 6],
    [6, 7], [7, 8], [2, 7], [5, 9], [6, 10], [9, 10], [9, 11],
    [10, 8], [4, 8],
  ];

  return (
    <svg
      viewBox="0 0 220 200"
      className="h-full w-full"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#3AC8D5"
          strokeOpacity={0.2}
          strokeWidth={1.5}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4} fill="#3AC8D5" fillOpacity={0.2} />
      ))}
    </svg>
  );
}

function Manifesto() {
  return (
    <section className="bg-white px-6 py-24" id="governance">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-brand-black md:text-4xl">
            Enterprise AI that Operates within your Governance Framework
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-[--text-secondary] md:text-lg">
            Synthetix is purpose-built for enterprises who need more than a
            code generation tool. It is a governed agentic execution platform
            that compresses the highest-friction stages of software delivery
            including system discovery, architecture planning, migration
            execution, incident triage, and compliance documentation into one
            auditable, policy-controlled pipeline. Other AI tools suggest.
            Synthetix decides, acts, and is accountable. Not autocomplete.
          </p>
        </div>
        <div className="h-64 rounded-2xl bg-neutral-50 p-6 md:h-80">
          <NetworkIllustration />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Solutions                                                           */
/* ------------------------------------------------------------------ */

function Solutions() {
  return (
    <section className="bg-white px-6 py-24" id="solutions">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Solutions
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            AI-First Digital Engineering Platform with Governed Execution
            Layer
          </h2>
        </div>

        <SolutionsTabs />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Platform capabilities                                               */
/* ------------------------------------------------------------------ */

function PlatformCapabilities() {
  return (
    <section className="bg-neutral-50 px-6 py-24" id="platform">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-black md:text-4xl">
            Every Enterprise Motion Delivered at a Pace Traditional
            Engineering Can&apos;t Match
          </h2>
          <p className="mt-6 font-body text-base text-[--text-secondary] md:text-lg">
            Synthetix runs all four enterprise delivery motions through one
            orchestration layer, one knowledge graph, and one governance
            framework. It delivers unified visibility, predictable delivery
            cadence, and audit-ready output at every stage.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_CAPABILITIES.map((cap) => (
            <div key={cap.title} className="flex flex-col items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                <cap.icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-black">
                {cap.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[--text-secondary]">
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            From Discovery to Deployment — Six Governed Stages
          </h2>
          <p className="mt-4 font-body text-base text-[--text-secondary]">
            Synthetix runs each stage in sequence with policy gates, human
            checkpoints, and a signed audit trail throughout.
          </p>
        </div>

        <div className="mt-14">
          <RadialOrbitalTimeline items={PIPELINE_STAGES} />
        </div>

        <div className="mt-6 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand-blue"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee                                                             */
/* ------------------------------------------------------------------ */

function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="overflow-hidden bg-gradient-primary py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 font-display text-sm font-medium uppercase tracking-widest text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Synthetix                                                       */
/* ------------------------------------------------------------------ */

function WhySynthetix() {
  return (
    <section className="bg-white px-6 py-24" id="why">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            The Distinction
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            Why Synthetix
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-black">
              Other AI Tools
            </h3>
            <ul className="mt-6 space-y-4">
              {OTHER_AI_TOOLS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[--color-danger]" />
                  <span className="font-body text-sm text-[--text-secondary]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-blue bg-brand-blue/5 p-8">
            <h3 className="font-display text-xl font-semibold text-brand-black">
              Synthetix
            </h3>
            <ul className="mt-6 space-y-4">
              {SYNTHETIX_TRAITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[--color-success]" />
                  <span className="font-body text-sm text-brand-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block rounded-lg bg-brand-blue px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brand-blue-mid"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Agent grid                                                          */
/* ------------------------------------------------------------------ */

function AgentGrid() {
  return (
    <section className="bg-neutral-50 px-6 py-24" id="agents">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Agent Workforce
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            The AI Agent Workforce Behind the Pipeline
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((agent, i) => (
            <div
              key={agent.name}
              className="relative rounded-2xl border border-neutral-200 border-t-2 border-t-transparent bg-white p-6 transition-colors hover:border-t-brand-cyan"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue font-body text-xs font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-black">
                {agent.name}
              </h3>
              <p className="mt-2 font-body text-sm text-[--text-secondary]">
                {agent.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-white px-8 py-12 text-center shadow-sm">
          <h3 className="font-display text-2xl font-bold text-brand-black">
            See It Run On Your Estate.
          </h3>
          <p className="mx-auto mt-3 max-w-xl font-body text-sm text-[--text-secondary]">
            Synthetix compresses discovery, architecture, build, and
            governance into one auditable execution run on a real segment of
            your environment.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-lg bg-brand-blue px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-brand-blue-mid"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Platform proof                                                      */
/* ------------------------------------------------------------------ */

function PlatformProof() {
  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Enterprise Runs
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            Representative Enterprise Performance
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROOF_POINTS.map((point) => (
            <div
              key={point.metric}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="font-display text-2xl font-bold text-brand-blue">
                {point.metric}
              </span>
              <p className="mt-3 font-body text-sm leading-relaxed text-[--text-secondary]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Platform Views
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            What the Platform Delivers
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.attribution}
              className="rounded-2xl border border-neutral-200 bg-white p-8"
            >
              <Quote className="h-8 w-8 text-brand-cyan" />
              <p className="mt-4 font-body text-sm leading-relaxed text-brand-black">
                {t.quote}
              </p>
              <p className="mt-6 font-body text-xs italic text-[--text-secondary]">
                {t.attribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Business case                                                       */
/* ------------------------------------------------------------------ */

function BusinessCase() {
  return (
    <section className="bg-neutral-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wide text-brand-blue">
            Business Case
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-black md:text-4xl">
            Capabilities, translated into cost, time, and risk.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-neutral-200 rounded-2xl bg-white shadow-sm">
          {BUSINESS_CASE.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-4 px-8 py-6 sm:flex-row sm:items-center"
            >
              <item.icon className="h-6 w-6 shrink-0 text-brand-blue" />
              <div>
                <h3 className="font-display text-base font-semibold text-brand-black">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-sm text-[--text-secondary]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold text-brand-black md:text-4xl">
          Before You Explore Synthetix
        </h2>

        <div className="mt-12 space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-xl border border-neutral-200 px-6 py-5 transition-colors ${
                  isOpen ? "border-l-4 border-l-brand-blue" : ""
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-brand-black">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-blue transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 font-body text-sm leading-relaxed text-[--text-secondary]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA band                                                            */
/* ------------------------------------------------------------------ */

function CTABand() {
  return (
    <section className="bg-gradient-hero px-6 py-24" id="contact">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          See It Run On Your Estate.
        </h2>
        <p className="mt-4 font-body text-base text-white/90 md:text-lg">
          Synthetix compresses discovery, architecture, build, and governance
          into one auditable execution run on a real segment of your
          environment.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-brand-blue transition-opacity hover:opacity-90"
          >
            Request a Demo
          </a>
          <a
            href="#platform"
            className="rounded-lg border border-white px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore Synthetix
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-brand-black px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl font-semibold text-white">
            Synthetix
          </span>
          <p className="mt-3 font-body text-sm text-[--text-secondary]">
            Governed agentic execution platform for enterprise software
            delivery.
          </p>
          <p className="mt-6 font-body text-xs text-[--text-secondary]">
            &copy; {new Date().getFullYear()} Synthetix. All rights reserved.
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[--text-secondary] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-neutral-700 pt-6">
        <p className="font-body text-xs text-[--text-secondary]">
          Synthetix — Governed Agentic Execution Platform.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBand />
      <Manifesto />
      <Solutions />
      <PlatformCapabilities />
      <HowItWorks />
      <MarqueeStrip />
      <WhySynthetix />
      <AgentGrid />
      <PlatformProof />
      <Testimonials />
      <BusinessCase />
      <FAQ />
      <CTABand />
      <Footer />
    </main>
  );
}
