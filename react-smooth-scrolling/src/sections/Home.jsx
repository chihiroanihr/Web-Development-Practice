import { useNav } from "../hooks/useNav";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <section ref={homeRef} id="home">
      <h2>Home</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex est quod a
        dicta omnis qui asperiores porro consequuntur non delectus nihil,
        officiis dignissimos ratione ea eum, tempore doloremque et numquam.
      </p>
    </section>
  );
};

export default Home;
