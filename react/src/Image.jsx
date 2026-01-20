export default function Image({ path, children, large = false }) {
  // https://res.cloudinary.com/listentoapril/image/upload/v1763012427/emo/ProctorValleyRoad_001-1.avif
  const width = large ? 688 : 320;

  const src = `https://res.cloudinary.com/listentoapril/image/upload/f_auto,q_auto,dpr_2,w_${width}/emo/${path}`;

  const openPopup = (event) => {
    event.preventDefault();

    const w = 800;
    const h = 600;
    var left = screen.width / 2 - w / 2;
    var top = screen.height / 2 - h / 2;

    // Define window features including the calculated top/left coordinates
    var features =
      'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, ';
    features +=
      'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left;

    window.open(
      `https://res.cloudinary.com/listentoapril/image/upload/emo/${path}`,
      'Image',
      features,
    );
  };

  if (children) {
    return (
      <figure className="mb-4">
        <a
          href={`https://res.cloudinary.com/listentoapril/image/upload/emo/${path}`}
          target="_blank"
          onClick={openPopup}
          className="bg-black"
        >
          <img src={src} alt="" className="mb-2 bg-black" loading="lazy" />
        </a>
        {children && (
          <figcaption className="text-xs text-gray-500 text-right text-pretty">
            {children}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <a
      href={`https://res.cloudinary.com/listentoapril/image/upload/emo/${path}`}
      target="_blank"
      onClick={openPopup}
    >
      <img src={src} className="mb-4" />
    </a>
  );
}
