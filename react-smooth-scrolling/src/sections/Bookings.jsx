import { useNav } from "../hooks/useNav";

const Bookings = () => {
  const bookingsRef = useNav("Bookings");

  return (
    <section ref={bookingsRef} id="bookings">
      <h2>Bookings</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorem
        harum deleniti eligendi incidunt culpa, fuga debitis libero eveniet
        voluptatibus minus rem, sapiente reprehenderit, dolore atque illum
        architecto ut assumenda?
      </p>
    </section>
  );
};

export default Bookings;
