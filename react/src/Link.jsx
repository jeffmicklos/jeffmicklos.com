export default function Link({ href, children, inline, withoutIcon }) {
  let className =
    'flex relative cursor-pointer underline text-blue-600 mt-4 mb-4 ';

  if (inline || withoutIcon) {
    className = 'cursor-pointer underline text-blue-600 inline-block';
  }

  return (
    <a
      href={href}
      className={className}
      style={{ left: inline || withoutIcon ? '' : '-7px' }}
      target="_blank"
    >
      {!withoutIcon && (
        <img
          src="https://res.cloudinary.com/listentoapril/image/upload/v1768676616/emo/tumblr_88dcb597aeeba374bbc2c7b000db331d_ac678dbc_1280.webp"
          className={`relative -top-px ${inline ? 'inline' : ''}`}
          style={{ width: 27 }}
        />
      )}
      {children}
    </a>
  );
}
