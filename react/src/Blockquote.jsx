export function Blockquote({ children, cite }) {
  return (
    <div className="pl-4 border-l  mt-6 mb-6">
      <blockquote className="font-serif italic">{children}</blockquote>
      {cite && <cite className="text-md not-italic">{cite}</cite>}
    </div>
  );
}
