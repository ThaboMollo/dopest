import Image from "next/image";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Photography studio hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-6 text-center text-fg-inverse">
        <p className="font-caption text-xs tracking-[0.3em] uppercase md:text-sm">
          {siteConfig.tagline}
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11.25rem]">
          DOPEST
          <br />
          MEDIA
          <br />
          PRODUCTION
        </h1>
        <div className="mt-10">
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
