import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src="/images/photographer.jpg"
              alt="Founder of Dopest Media Production"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="font-caption text-xs tracking-[0.3em] uppercase text-fg-secondary">
              The Founder
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">
              Where Vision
              <br />
              Meets Light
            </h2>
            <p className="mt-8 font-body text-lg leading-relaxed text-fg-secondary md:text-xl">
              Behind every Dopest frame is a photographer who sees the world
              differently. With years of experience and an unrelenting passion
              for visual storytelling, our founder built this studio on one
              principle: every client deserves images that feel as powerful as
              the moments they capture.
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-fg-secondary md:text-xl">
              From intimate portraits to large-scale productions, we approach
              each project with the same dedication to craft, detail, and
              creative integrity that has defined our work from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
