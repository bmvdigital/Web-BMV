// Renders JSON-LD structured data as a <script> tag — Next.js App Router recommended pattern
// Escapes </script> sequences to prevent tag injection attacks
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const safe = JSON.stringify(data).replace(/<\/script>/gi, "<\\/script>");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}
