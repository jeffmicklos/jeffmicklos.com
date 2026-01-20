export default function IntroQuote({ children, cite }) {
  return (
    <div className="font-serif mb-8 mt-4 text-gray-600">
      <blockquote className="text-lg mb-4 italic">{children}</blockquote>
      {cite && <cite className="text-md not-italic">{cite}</cite>}
    </div>
  );
}
