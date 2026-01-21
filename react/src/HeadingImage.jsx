export default function HeadingImage(props) {
  let src = props.src;

  if (props.path) {
    src = `https://res.cloudinary.com/listentoapril/image/upload/f_auto,q_auto,dpr_2,w_1024/emo/${props.path}`;
  }

  return (
    <div
      className="aspect-235/100 bg-cover flex justify-center bg-center relative mb-8 mt-8"
      style={{
        backgroundImage: `url(${src})`,
        color: 'white',
      }}
    >
      {(props.path || props.src) && (
        <div className="exposure w-full absolute h-full bg-white mix-blend-overlay" />
      )}
      <h2
        className="place-content-center place-items-center text-7xl/20 font-extrabold text-transparent text-center uppercase"
        style={{
          textShadow: '0 0 2px rgb(255 255 255)',
        }}
      >
        {props.children}
      </h2>
    </div>
  );
}
