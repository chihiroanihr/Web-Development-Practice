import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SocialMediaIcons } from "../components";
import useMediaQuery from "../hooks/useMediaQuery";
import profileImg from "../assets/profile-image.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* -------- Image Section -------- */}
      <div className="flex md:order-2 justify-center basis-3/5 mt-16 md:mt-32 z-10">
        {isAboveMediumScreen ? (
          // ------------ For Large Screen ------------ //
          <div
            className="relative z-0 ml-20 
                before:absolute before:-top-20 before:-left-20
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full 
                before:rounded-t-[400px] before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="w-full max-w-[400px] md:max-w-[600px] 
                hover:filter hover:saturate-200 transition duration-500 z-10"
              src={profileImg}
            />
          </div>
        ) : (
          // ------------ For Small Screen ------------ //
          <img
            alt="profile"
            className="w-full max-w-[400px] md:max-w-[600px] z-10"
            src={profileImg}
          />
        )}
      </div>

      {/* -------- Text Section -------- */}
      <div className="basis-2/5 mt-12 md:mt-32 z-10">
        {/* ---- Heading Section ---- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5 }}
          variants={{
            // position of -50 to 0
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Name */}
          <p className="font-playfair text-6xl text-center md:text-start">
            Rhina {""}
            <span
              // Add image before "Kim"
              className="z-20 
                before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] 
                xs:relative xs:text-deep-blue xs:font-semibold xs:before:content-brush"
            >
              Kim
            </span>
          </p>
          {/* Text */}
          <p className="text-sm text-center md:text-start mt-10 mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            assumenda porro ratione quasi voluptatum, eos veniam corrupti
            pariatur non temporibus!
          </p>
        </motion.div>

        {/* ---- CTA Section ---- */}
        <motion.div
          className="flex justify-center md:justify-start mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            // position of -50 to 0
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue rounded-sm text-deep-blue font-semibold px-7 py-3
            hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="bg-gradient-rainblue rounded-r-sm py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="flex items-center justify-center w-full h-full bg-deep-blue font-playfair px-10
            hover:text-red transition duration-500"
            >
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        {/* ---- Social Media Icons ---- */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
