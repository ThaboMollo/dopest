import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-7xl md:text-9xl">404</h1>
      <p className="mt-4 font-body text-lg text-fg-secondary">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-fg-primary px-8 py-3 font-caption text-xs tracking-widest uppercase transition-colors hover:bg-fg-primary hover:text-fg-inverse"
      >
        Back Home
      </Link>
    </div>
  );
}
