import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { LineGradient } from "../components";
import contactImg from "../assets/contact-image.jpeg";

const Contact = () => {
  const {
    register, // identify inputs
    trigger, // validation
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // check if form isvalid before submitting
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* ---------------------- Heading ---------------------- */}
      <motion.div
        className="flex justify-center lg:justify-end w-full"
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
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <LineGradient width="w-1/2 my-5 mx-auto lg:mr-0" />
        </div>
      </motion.div>

      {/* ---------------------- Forms ---------------------- */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="flex justify-center basis-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={contactImg} alt="contact" />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            action="https://formsubmit.co/2631bfcf8c48f0428927c8a30ebf92a1"
            method="POST"
            target="_blank"
            onSubmit={onSubmit}
          >
            {/* ---- Name ---- */}
            <input
              className="w-full p-3 bg-blue font-semibold placeholder-opaque-black"
              type="text"
              placeholder="NAME"
              // react-hook-form
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}
            {/* ---- Email ---- */}
            <input
              className="w-full p-3 bg-blue font-semibold placeholder-opaque-black mt-5"
              type="text"
              placeholder="EMAIL"
              // react-hook-form
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            {/* ---- Email ---- */}
            <textarea
              className="w-full p-3 bg-blue font-semibold placeholder-opaque-black mt-5"
              type="text"
              rows="4"
              cols="50"
              placeholder="MESSAGE"
              // react-hook-form
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters."}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5
                hover:bg-red hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
