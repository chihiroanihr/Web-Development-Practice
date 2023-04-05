import { useNav } from "../hooks/useNav";

const Hotels = () => {
  const hotelsRef = useNav("Hotels");

  return (
    <section ref={hotelsRef} id="hotels">
      <h2>Hotels</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rerum!
        Facilis reiciendis odit perferendis architecto cumque obcaecati at
        corporis enim quisquam perspiciatis odio magnam numquam, voluptatum
        eaque possimus sit a.
      </p>
    </section>
  );
};

export default Hotels;
