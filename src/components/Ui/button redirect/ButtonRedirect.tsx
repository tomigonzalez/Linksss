type Props = {
  urls: string;
  str: string;
  img: string;
  letter: string;
};

const ButtonRedirect = (props: Props) => {
  const buttonStyle = {
    backgroundImage: `url(${props.img})`,
    fontFamily: `${props.letter}`,
    fontSize: `40px`,
  };
  return (
    <button
      className="h-16 w-80 bg-black rounded-3xl bg-center bg-cover text-white  hover:text-gray-400 hover:border-2 hover:border-solid hover:border-gray-400 hover:bg-gray-200"
      onClick={() => window.open(props.urls)}
      style={buttonStyle}
    >
      {props.str}
    </button>
  );
};

export default ButtonRedirect;
