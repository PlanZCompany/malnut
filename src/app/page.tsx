import { ContentSection } from '@/components/sections/content-section'
import { SiteSidebar } from '@/components/sute-sidebar'
import { Button } from '@/components/ui/button'
import { SITE_SECTION_LIST, HERO_CONFIG } from '@/data/site-config'
import { CONTACT_INFO } from '@/data/site-content'

export default function Page() {
  return (
    <div className="min-h-screen bg-cream text-foreground">
      <SiteSidebar
        logoSrc="/images/logo.png"
        logoAlt="Malnut logo"
        companyName="Malnut"
      />

      <main className="lg:pl-72 ">
        <HeroSection />

        <div className="relative z-10 bg-cream">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-16 lg:space-y-24">
              {SITE_SECTION_LIST.map((section) => (
                <ContentSection
                  key={section.id}
                  id={section.id}
                  heading={section.heading}
                  images={section.images}
                  rows={section.rows}
                  layout={section.layout}
                  button={section.button}
                />
              ))}
            </div>
          </div>

          <SiteFooter />
        </div>
      </main>
    </div>
  )
}

function HeroSection() {
  return (
    <section
      id={HERO_CONFIG.sectionId}
      className="sticky top-0 isolate overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_CONFIG.backgroundImage})` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-black/55"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[70svh] max-w-7xl items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
            {HERO_CONFIG.title}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {HERO_CONFIG.subtitle}
          </h1>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg"
            >
              <a href={`mailto:${CONTACT_INFO.email}`}>
                {HERO_CONFIG.ctaLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8 lg:flex-row lg:justify-between">
        <p className="text-walnut">
          © {new Date().getFullYear()} Malnut. All rights reserved.
        </p>

        <p className="text-walnut">
          Executed by{' '}
          <a
            href="#"
            className="font-medium text-espresso transition-colors hover:text-walnut"
          >
            Your Freelancer Brand
          </a>
        </p>
      </div>
    </footer>
  )
}
