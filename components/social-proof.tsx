export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="w-full max-w-4xl grid gap-6 md:grid-cols-3">
        {[
          "Dental practices clear verification backlogs before the morning rush",
          "Accounting teams reconcile ledgers 3x faster with audit-ready trails",
          "Freight operators process customs packets without breaking automation",
        ].map((headline) => (
          <div key={headline} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-muted-foreground">
            {headline}
          </div>
        ))}
      </div>
    </section>
  )
}
