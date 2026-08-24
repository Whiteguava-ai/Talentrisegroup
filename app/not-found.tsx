import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink py-32 text-white">
      <Container className="mx-auto max-w-lg text-center">
        <p className="font-display text-7xl font-bold text-lime">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" arrow>
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
