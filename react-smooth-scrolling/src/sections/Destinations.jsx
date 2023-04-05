import { useNav } from "../hooks/useNav";

const Destinations = () => {
  const destinationsRef = useNav("Destinations");

  return (
    <section ref={destinationsRef} id="destinations">
      <h2>Destinations</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptate
        odit repellat earum perspiciatis ex voluptatum distinctio, excepturi
        quos eaque nisi sunt, nostrum delectus magni vel sed libero dignissimos
        velit.
      </p>
    </section>
  );
};

export default Destinations;
