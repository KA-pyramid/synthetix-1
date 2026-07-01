"use client";

import { Sparkles, RefreshCw, LifeBuoy, Server, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  {
    value: "greenfield",
    icon: Sparkles,
    label: "Greenfield",
    frame: "Imagine",
    title: "Greenfield App Development",
    body: "Synthetix agents interpret requirements, negotiate architecture, generate scaffolds, and verify output before it reaches your engineering teams.",
    bullets: [
      "Requirements for Architecture",
      "Governed Code Generation",
      "Automated Test Coverage",
      "Release-Ready Components",
    ],
  },
  {
    value: "modernization",
    icon: RefreshCw,
    label: "Modernization",
    frame: "Reimagine",
    title: "Code Modernization",
    body: "Agents analyze every line, map every dependency, and execute migration in parallel waves under full governance, without disrupting production systems.",
    bullets: [
      "Legacy Estate Analysis",
      "Dependency and Risk Mapping",
      "Parallel Migration Wave Execution",
      "Evidence-Backed Architecture",
    ],
  },
  {
    value: "app-support",
    icon: LifeBuoy,
    label: "App Support",
    frame: "Evolve",
    title: "Application Support",
    body: "Synthetix agents triage incidents, identify root causes, propose fixes, and refresh runbooks. They escalate to human reviewers only when judgment is required.",
    bullets: [
      "Incident Triage and RCA",
      "Fix Proposal and Validation",
      "Runbook and Documentation Refresh",
      "L2/L3 Effort Reduction",
    ],
  },
  {
    value: "infra-support",
    icon: Server,
    label: "Infra Support",
    frame: "Evolve",
    title: "Infrastructure Support",
    body: "From IaC comprehension to drift detection and change impact assessment, Synthetix governs every infrastructure remediation across cloud, hybrid, and on premises.",
    bullets: [
      "IaC and Topology Intelligence",
      "Drift Detection and Alerting",
      "Policy-Gated Change Control",
      "Cross-Environment Remediation",
    ],
  },
] as const;

function TrackIllustration() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden="true">
      <rect
        x="20"
        y="30"
        width="120"
        height="60"
        rx="8"
        fill="#0A47C9"
        fillOpacity="0.08"
        stroke="#3E7FE8"
        strokeWidth="1.5"
      />
      <rect
        x="180"
        y="30"
        width="120"
        height="60"
        rx="8"
        fill="#3AC8D5"
        fillOpacity="0.08"
        stroke="#3AC8D5"
        strokeWidth="1.5"
      />
      <rect
        x="100"
        y="140"
        width="120"
        height="60"
        rx="8"
        fill="#0A47C9"
        fillOpacity="0.08"
        stroke="#3E7FE8"
        strokeWidth="1.5"
      />
      <line x1="140" y1="60" x2="180" y2="60" stroke="#3E7FE8" strokeWidth="1.5" />
      <line x1="160" y1="90" x2="160" y2="140" stroke="#3E7FE8" strokeWidth="1.5" />
      <circle cx="80" cy="60" r="4" fill="#3E7FE8" />
      <circle cx="240" cy="60" r="4" fill="#3AC8D5" />
      <circle cx="160" cy="170" r="4" fill="#3E7FE8" />
    </svg>
  );
}

export function SolutionsTabs() {
  return (
    <Tabs defaultValue={TABS[0].value} className="mt-16">
      <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent p-0 sm:gap-3">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 data-[state=active]:border-brand-blue data-[state=active]:bg-brand-blue/5 data-[state=active]:shadow-none"
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="mt-10 rounded-2xl bg-neutral-50 p-6 lg:p-12">
        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-block rounded-full bg-white px-3 py-1 font-display text-xs italic text-brand-cyan shadow-sm">
                  {tab.frame}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-brand-black lg:text-3xl">
                  {tab.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-[--text-secondary] lg:text-base">
                  {tab.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {tab.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 font-body text-sm text-brand-black"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <TrackIllustration />
              </div>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
