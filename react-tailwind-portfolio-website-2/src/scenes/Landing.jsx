import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import profileImg from "../assets/profile-image.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      <div className="flex justify-center basis-3/5 md:order-2 mt-16 md:mt-32 z-10">
        {isAboveMediumScreen ? (
          <div className="relative ml-20 z-0 before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[400px] before:h-full before:rounded-t-[400px] before:border-2 before:border-blue before:z-[-1]">
            <img
              src={profileImg}
              alt="profile"
              className="w-full max-w-[400px] md:max-w-[600px] hover:filter hover:saturate-200 transition duration-500 z-10"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default Landing;
