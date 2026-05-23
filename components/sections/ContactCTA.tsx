import { siteConfig } from "@/content/site";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-surface-dark px-6 py-24 text-fg-inverse lg:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-4xl leading-tight md:text-6xl lg:text-7xl xl:text-8xl">
          Let&apos;s Create
          <br />
          Something Beautiful
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-body text-lg leading-relaxed text-fg-inverse/70 md:text-xl">
          Tell us about your vision. We&apos;ll craft a bespoke package tailored
          to your needs — no templates, no compromises.
        </p>
        <div className="mt-12">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-fg-inverse px-12 py-5 font-caption text-sm tracking-widest uppercase text-fg-primary transition-colors hover:bg-fg-inverse/90"
          >
            Get a Quote
          </a>
        </div>
        <p className="mt-6 font-caption text-sm text-fg-inverse/50">
          Or call us directly at{" "}
          <a
            href={siteConfig.phoneLink}
            className="underline transition-colors hover:text-fg-inverse"
          >
            {siteConfig.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
