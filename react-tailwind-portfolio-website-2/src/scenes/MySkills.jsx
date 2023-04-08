import { motion } from "framer-motion";
import { LineGradient } from "../components";
import useMediaQuery from "../hooks/useMediaQuery";
import skillsImg from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* ---------------------- Heading ---------------------- */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        {/* ---- Image Section ---- */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5 }}
          variants={{
            // position of x: -50 to 0
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semobold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            assumenda sint iste dignissimos non sequi autem id eligendi, tempore
            aliquid!
          </p>
        </motion.div>

        {/* ---- Text Section ---- */}
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreen ? (
            // ------------ For Large Screen ------------ //
            <div
              className="relative z-0 ml-20 
                before:absolute before:-top-10 before:-left-10
                before:w-full md:before:max-w-[600px] before:h-full 
                before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src={skillsImg} />
            </div>
          ) : (
            // ------------ For Small Screen ------------ //
            <img alt="skills" className="z-10" src={skillsImg} />
          )}
        </div>
      </div>

      {/* ---------------------- Skills ---------------------- */}
      <div className="md:flex md:justify-between gap-32 mt-16">
        {/* ---- Experience ---- */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5 }}
          variants={{
            // position of y: 50 to 0
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/2 md:w-3/4 h-32 bg-blue z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            dicta, nisi perspiciatis itaque adipisci assumenda fugiat similique
            earum nobis rem excepturi. Eum incidunt enim cumque alias architecto
            quas dolorem quia.
          </p>
        </motion.div>

        {/* ---- Innovative ---- */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            // position of y: 50 to 0
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/2 md:w-3/4 h-32 bg-red z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            dicta, nisi perspiciatis itaque adipisci assumenda fugiat similique
            earum nobis rem excepturi. Eum incidunt enim cumque alias architecto
            quas dolorem quia.
          </p>
        </motion.div>

        {/* ---- Imaginative ---- */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            // position of y: 50 to 0
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/2 md:w-3/4 h-32 bg-yellow z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            dicta, nisi perspiciatis itaque adipisci assumenda fugiat similique
            earum nobis rem excepturi. Eum incidunt enim cumque alias architecto
            quas dolorem quia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
