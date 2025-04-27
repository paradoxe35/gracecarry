import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="g-container py-12 flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)]">
      <h1 className="g-heading text-4xl md:text-6xl mb-4 text-primary">404</h1>
      <h2 className="text-2xl font-medium mb-4">Page Not Found</h2>
      <p className="text-neutral-700 max-w-md mx-auto mb-8">
        Oops! It seems the page you were looking for doesn't exist or has been
        moved. Let's get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="primary" href="/">
          Go to Homepage
        </Button>

        <Button variant="secondary" href="/contact">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
