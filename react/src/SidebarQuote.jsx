export default function SidebarQuote({ children, cite }) {
  return (
    <div className="text-sm text-gray-500 mb-4">
      <blockquote className="font-serif italic text-pretty mb-2">
        {children}
      </blockquote>
      {cite && <cite className="not-italic text-xs">{cite}</cite>}
    </div>
  );
}
