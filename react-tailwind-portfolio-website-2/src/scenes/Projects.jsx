import { motion } from "framer-motion";
import { LineGradient } from "../components";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // 0.2s gap in between childrens
    },
  },
};

const projectVariant = {
  // initial state of each child
  hidden: { opacity: 0, scale: 0.8 },
  // final state of each child
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase(); // "Project 1" --> "project-1"
  const overlayStyles = `flex flex-col justify-center items-center absolute w-full h-full 
    p-16 text-center text-deep-blue bg-grey opacity-0 z-30 
    hover:opacity-90 transition duration-500`;

  return (
    <motion.div className="relative" variants={projectVariant}>
      <div className={overlayStyles}>
        <p className="font-playfair text-2xl">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* ---------------------- Heading ---------------------- */}
      <motion.div
        className="md:w-2/5 text-center mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
        transition={{ duration: 0.5 }}
        variants={{
          // position of y: -50 to 0
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semobold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <LineGradient width="w-1/3 mt-5 mx-auto" />
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda
          sint iste dignissimos non sequi autem id eligendi, tempore aliquid!
        </p>
      </motion.div>

      {/* ---------------------- Projects ---------------------- */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* ---- Row 1 ---- */}
          <div
            className="flex justify-center items-center max-w-[400px] max-h-[400px] p-10 bg-red
                font-playfair font-semibold text-center text-2xl"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero magnam error ex voluptates soluta!"
          />
          <Project
            title="Project 2"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero magnam error ex voluptates soluta!"
          />

          {/* ---- Row 2 ---- */}
          <Project
            title="Project 3"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero magnam error ex voluptates soluta!"
          />
          <Project
            title="Project 4"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero magnam error ex voluptates soluta!"
          />
          <Project
            title="Project 5"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero magnam error ex voluptates soluta!"
          />

          {/* ---- Row 3 ---- */}
          <Project
            title="Project 6"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero magnam error ex voluptates soluta!"
          />
          <Project
            title="Project 7"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, libero magnam error ex voluptates soluta!"
          />
          <div
            className="flex justify-center items-center max-w-[400px] max-h-[400px] p-10 bg-blue
                font-playfair font-semibold text-center text-2xl"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
