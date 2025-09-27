import { Building2, Calculator, ShieldCheck, Ship, Stethoscope, Workflow } from "lucide-react"

export function BentoSection() {
  const pillars = [
    {
      title: "Dental insurance command center",
      description:
        "Pre-trained agents clear eligibility, post benefits, and sync claim status updates directly into Open Dental.",
      Icon: Stethoscope,
    },
    {
      title: "Accounting close automation",
      description:
        "HireSevak reconciles ledgers, posts journal entries in Tally or QuickBooks Desktop, and flags anomalies for review.",
      Icon: Calculator,
    },
    {
      title: "Freight forwarding orchestration",
      description:
        "Agents manage booking portals, assemble customs packets, and chase carrier updates across desktop and web tools.",
      Icon: Ship,
    },
    {
      title: "Hybrid API + UI execution",
      description:
        "Combine resilient pixel-level control with secure API calls so workflows survive UI changes and stay in sync.",
      Icon: Workflow,
    },
    {
      title: "Operations intelligence",
      description:
        "Dashboards surface throughput, exception queues, and ROI so leaders can continuously tune their automations.",
      Icon: Building2,
    },
    {
      title: "Governance & compliance",
      description:
        "Role-based guardrails, audit trails, and human approval paths meet HIPAA, SOC 2, and ISO-ready requirements.",
      Icon: ShieldCheck,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-12 md:py-20 relative flex flex-col lg:flex-row gap-10">
        <div className="hidden lg:block absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="hidden lg:block absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative z-10 flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Solution-in-a-box for legacy operations
          </p>
          <h2 className="text-foreground text-3xl md:text-5xl font-semibold leading-tight max-w-xl">
            Vision language agents built for your operations teams
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
            HireSevak delivers domain-trained automation that sees every pixel, understands your documents, and follows
            business rules across dental, accounting, and freight workflows without costly refactoring.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-3xl font-semibold text-foreground">3x</div>
              <p className="text-sm text-muted-foreground">Faster cycle time on insurance, billing, and logistics queues</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-3xl font-semibold text-foreground">94%</div>
              <p className="text-sm text-muted-foreground">Average automation accuracy with human-in-the-loop guardrails</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map(({ title, description, Icon }) => (
                <div key={title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-background/40 p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-foreground text-base font-semibold leading-tight">{title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
