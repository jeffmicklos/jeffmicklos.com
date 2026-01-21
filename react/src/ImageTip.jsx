import { Tooltip } from 'react-tooltip';

export default function Tip({ children, path, width = '320px' }) {
  const id = crypto.randomUUID();
  const src = `https://res.cloudinary.com/listentoapril/image/upload/f_auto,q_auto,dpr_2,w_600/emo/${path}`;

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
        border="1px solid #333"
        style={{
          backgroundColor: '#121212',
          maxWidth: width,
        }}
      >
        <img src={src} alt="" className="" loading="lazy" />
      </Tooltip>
    </>
  );
}
