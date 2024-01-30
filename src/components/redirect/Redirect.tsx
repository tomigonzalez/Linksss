import ButtonRedirect from "../Ui/button redirect/ButtonRedirect";

const Redirect = () => {
  return (
    <article className="flex flex-col h-3/4 w-3/4 place-content-evenly items-center ">
      <ButtonRedirect
        urls="https://portafoliov3-tan.vercel.app/"
        str="Portfolio"
        img="portafolio.png"
        letter="'Italianno', cursive"
      />
      <ButtonRedirect
        urls="https://linkedin.com/in/tomigonzalez"
        str="Linked-in"
        img="linkedin.png"
        letter="'League Gothic', sans-serif"
      />
      <ButtonRedirect
        urls="https://github.com/tomigonzalez"
        str="GitHub"
        img="github.png"
        letter="'League Spartan', sans-serif"
      />
      <ButtonRedirect
        urls="https://www.figma.com/@tomigonnzalez"
        str="Figma"
        img="Figma.png"
        letter="'Raleway', sans-serif"
      />
      <ButtonRedirect
        urls="https://drive.google.com/file/d/1z9XOUSA5HZwYBc702R7rGU2d3-1VFv2s/view?usp=sharing"
        str="Cv"
        img="cv.png"
        letter="'Leckerli One', cursive"
      />
    </article>
  );
};

export default Redirect;
