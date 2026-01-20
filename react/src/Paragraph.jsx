export default function Paragaph({ children, className = '' }) {
  return (
    <p className={`mb-4 text-pretty text-gray-300 ${className}`}>{children}</p>
  );
}
