import { Tooltip } from 'react-tooltip';

export default function Tip({ children, content }) {
  const id = crypto.randomUUID();

  return (
    <>
      <span
        data-tooltip-id={id}
        className="cursor-help underline decoration-dotted"
      >
        {children}
      </span>

      <Tooltip
        id={id}
        className="bg-gray-200 text-xs"
        opacity={1}
        border="1px solid #121212"
        style={{
          backgroundColor: '#ccc',
          color: '#121212',
          maxWidth: '280px',
          lineHeight: '1.1rem',
          fontSize: '13px',
        }}
      >
        {content}
      </Tooltip>
    </>
  );
}
