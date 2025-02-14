interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="font-bold text-3xl">{text}</h1>;
};

export default Title;
