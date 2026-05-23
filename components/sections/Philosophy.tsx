import Image from "next/image";

export function Philosophy() {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-caption text-xs tracking-[0.3em] uppercase text-fg-secondary">
              Our Philosophy
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">
              Where Art
              <br />
              Meets Intent
            </h2>
          </div>

          <div className="lg:col-span-3">
            <div className="relative aspect-[2/3] overflow-hidden">
              <Image
                src="/images/photographer.jpg"
                alt="Photographer at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="font-body text-lg leading-relaxed text-fg-secondary md:text-xl">
              Every frame we capture is a testament to your story. At Dopest
              Media Production, we blend artistic vision with technical mastery
              to create images that transcend the ordinary.
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-fg-secondary md:text-xl">
              We believe photography is more than documentation — it&apos;s
              interpretation. Each session is a collaboration between your
              vision and our craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
