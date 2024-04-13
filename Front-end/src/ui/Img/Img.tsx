type PropsType = {
  src: string;
  alt: string;
};

const Img = ({ src, alt }: PropsType) => {
  return <img src={src} alt={alt} loading="lazy" />;
};

export default Img;
