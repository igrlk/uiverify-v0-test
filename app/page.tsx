const menuItems = [
  {
    number: '01',
    name: 'Espresso',
    note: 'Rich, focused, and pulled to order.',
    price: '$3.50',
    accent: 'bg-espresso',
  },
  {
    number: '02',
    name: 'Latte',
    note: 'Silky steamed milk over a double shot.',
    price: '$5.50',
    accent: 'bg-oat',
  },
  {
    number: '03',
    name: 'Cold Brew',
    note: 'Slow-steeped for a clean, smooth finish.',
    price: '$5.00',
    accent: 'bg-sage',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-foreground">
          Bean <span className="text-primary">There</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <a className="transition-colors hover:text-foreground" href="#menu">Menu</a>
          <a className="transition-colors hover:text-foreground" href="#story">Our story</a>
          <a className="transition-colors hover:text-foreground" href="#visit">Visit</a>
        </nav>
        <a href="#menu" className="rounded-full bg-[#234b3b] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1b3b2e]">
          Order now
        </a>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <span className="block h-px w-8 bg-primary" aria-hidden="true" /> Neighborhood coffee, thoughtfully made
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(4rem,11vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.07em] text-foreground">
            Good coffee.<br /><em className="font-serif not-italic text-primary">Good company.</em>
          </h1>
        </div>
        <div className="max-w-sm pb-2 lg:justify-self-end">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A little corner for big ideas, slow mornings, and one more cup. Come in, stay awhile.
          </p>
          <a href="#menu" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary">
            See what&apos;s brewing <span aria-hidden="true" className="text-lg text-primary">→</span>
          </a>
        </div>
      </section>

      <div className="mx-6 border-t border-border lg:mx-10" />

      <section id="menu" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">The daily pour</p>
            <h2 className="font-display text-4xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl">Made for your ritual.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Three house favorites. No fuss, just really good coffee.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {menuItems.map((item) => (
            <article key={item.name} className="group relative min-h-64 overflow-hidden rounded-[2rem] border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1 sm:min-h-72">
              <div className={`absolute -right-12 -top-14 size-40 rounded-full opacity-70 transition-transform duration-500 group-hover:scale-125 ${item.accent}`} aria-hidden="true" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
                  <span className="font-mono text-sm font-medium text-foreground">{item.price}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-medium tracking-[-0.04em] text-foreground">{item.name}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="bg-primary px-6 py-20 text-primary-foreground lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/65">Since 2018 / Downtown</p>
          <p className="max-w-3xl font-display text-4xl leading-[1.04] tracking-[-0.04em] sm:text-6xl">We believe the best part of coffee is the moment it makes room for.</p>
        </div>
      </section>

      <footer id="visit" className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between lg:px-10">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-foreground">Bean There</p>
          <p className="mt-2">14 Willow Street, Portland</p>
        </div>
        <div className="sm:text-right">
          <p>Mon–Fri 7am–5pm · Sat–Sun 8am–4pm</p>
          <p className="mt-2">© 2026 Bean There Coffee Co.</p>
        </div>
      </footer>
    </main>
  )
}
