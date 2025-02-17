interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`w-full object-contain ${className}`} />
  );
};

export default Image;
