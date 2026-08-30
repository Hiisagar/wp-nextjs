import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for doesn't exist or may have
          been moved.
        </p>

        <Link href="/">
          Go Back Home
        </Link>
      </section>
    </main>
  );
}
