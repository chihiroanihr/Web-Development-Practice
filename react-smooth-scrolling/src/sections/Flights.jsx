import { useNav } from "../hooks/useNav";

const Flights = () => {
  const flightsRef = useNav("Flights");

  return (
    <section ref={flightsRef} id="flights">
      <h2>Flights</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        quaerat reprehenderit voluptas quasi, vel modi delectus, repellat natus
        itaque officia voluptatibus in facere dolores optio et rerum. Adipisci,
        dicta velit!
      </p>
    </section>
  );
};

export default Flights;
