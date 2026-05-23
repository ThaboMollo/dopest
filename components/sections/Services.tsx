import { services, siteConfig } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="bg-surface-dark px-6 py-24 text-fg-inverse lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-caption text-xs tracking-[0.3em] uppercase text-fg-inverse/60">
          What We Offer
        </p>
        <h2 className="mt-4 font-heading text-5xl leading-none md:text-7xl lg:text-8xl">
          Services
        </h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="font-heading text-2xl">{service.title}</h3>
              <p className="mt-4 font-body text-base leading-relaxed text-fg-inverse/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-fg-inverse px-10 py-4 font-caption text-xs tracking-widest uppercase text-fg-inverse transition-colors hover:bg-fg-inverse hover:text-fg-primary"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
