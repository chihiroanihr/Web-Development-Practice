import { motion } from "framer-motion";
import { LineGradient } from "../components";

const Testimonials = () => {
  // Style: Positioning of the testimonial person images
  const testimonialStyles = `flex flex-col justify-end relative max-w-[400px] h-[350px] p-16 mt-48 mx-auto
    before:top-[-120px] before:left-1/2 before:-ml-[110px]`;

  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* ---------------------- Heading ---------------------- */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
        <p className="font-playfair font-semibold text-red text-4xl mb-5">
          TESTIMONIALS
        </p>
        <LineGradient width="w-2/5 mx-auto" />
        <p className="mt-10">
          Here's What People are Saying About My Work. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Eaque, modi.
        </p>
      </motion.div>

      {/* ---------------------- Testimonials ---------------------- */}
      <div className="md:flex md:justify-between gap-8">
        {/* ---- Testimonial 1 ---- */}
        <motion.div
          className={`${testimonialStyles} bg-blue before:content-person1`} // Add image :before
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            illum?
          </p>
        </motion.div>

        {/* ---- Testimonial 2 ---- */}
        <motion.div
          className={`${testimonialStyles} bg-red before:content-person2`} // Add image :before
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            illum?
          </p>
        </motion.div>

        {/* ---- Testimonial 3 ---- */}
        <motion.div
          className={`${testimonialStyles} bg-yellow before:content-person3`} // Add image :before
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // run once, when element is 50% shown
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            illum?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
