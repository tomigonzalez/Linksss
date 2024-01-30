import UseAnimations from "react-useanimations";
import twitter from "react-useanimations/lib/twitter";
import instagram from "react-useanimations/lib/instagram";

const Footer = () => {
  return (
    <footer className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-6 ml-6">
        <a href="#">
          <UseAnimations
            animation={twitter}
            size={25}
            strokeColor="white"
            className="z-10"
          />
        </a>
        <a href="#" className="">
          <UseAnimations
            animation={instagram}
            size={25}
            strokeColor="white"
            className="z-10"
          />
        </a>
      </div>
      <div className="mr-6 w-16 h-4 ">
        <img src="../public/tmgc.png" alt="logo" className="w-full h-full" />
      </div>
    </footer>
  );
};

export default Footer;
