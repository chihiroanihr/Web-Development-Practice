import { cards, skills } from "./constants";
import ArrowRightSVG from "./svg/ArrowRightSvg";

function App() {
  return (
    <>
      <header className="text-grey-700 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center container mx-auto p-5">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">Rhina Kim</span>
          </a>
          <nav className="md:ml-auto text-base">
            {/* ml-auto = justify-content-between */}
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#blogs" className="hover:text-blue-400 duration-300">
              Blogs
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="text-gray-700">
        <div className="flex flex-col md:flex-row justify-center items-center container mx-auto py-20 px-5">
          {/* Text Section */}
          <div className="w-5/6 md:w-1/2 mb-16 md:mb-0 md:pr-16 lg:pr-24 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-gray-900 font-medium whitespace-nowrap mb-4">
              Hi,
              <br />
              I'm Rhina Kim
              <br />
              Web Developer
            </h1>
            <p className="leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nulla adipisci eligendi harum quis deleniti eius, eos amet nobis
              unde.
            </p>
            <button className="text-white bg-pink-400 py-2 px-6 border-0 rounded text-lg hover:bg-pink-600 duration-300">
              Contact
            </button>
          </div>
          {/* Image Section */}
          <div className="w-5/6 md:w-1/2 lg:max-w-lg">
            <img src="./img/rabbit.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          {/* Text Section */}
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl text-gray-900 font-medium mb-2">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ullam alias nesciunt in sit sed praesentium doloribus
              maxime optio. Eveniet.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur id harum non ullam amet at exercitationem accusamus.
              Hic eligendi iusto eius ipsam quaerat, delectus sit accusamus
              quos, eos quasi molestiae voluptatum perspiciatis officia harum
              explicabo tenetur atque nostrum totam consequatur praesentium
              voluptatibus sed? Atque ducimus quo saepe accusamus veritatis eum
              delectus quas porro doloremque ratione sequi modi distinctio a
              numquam totam esse, sapiente cumque dolorum accusantium alias
              facere. Accusamus in vitae voluptatum excepturi praesentium
              perspiciatis eius dignissimos voluptas corrupti, reprehenderit
              dolores provident natus molestias doloribus nostrum deserunt,
              expedita doloremque veritatis. Labore laudantium amet, repellendus
              incidunt ducimus quo aliquid ratione officia.
            </p>
          </div>
          {/* Cards Section */}
          <div className="flex flex-wrap">
            {cards.map((card, index) => (
              <div className="md:w-1/3 p-4" key={index}>
                <div className="bg-gray-200 rounded-lg p-8">
                  {/* Header Title */}
                  <div className="flex items-center mb-3">
                    {/* Icon */}
                    <div className="bg-pink-400 text-white rounded-full">
                      {/* <img src={card.icon} alt="icon"/> */}
                      {card.icon}
                    </div>
                    {/* Text */}
                    <h2 className="text-gray-900 text-lg font-medium ml-2">
                      {card.title}
                    </h2>
                  </div>
                  {/* Descriptions */}
                  <div>
                    {/* Texts */}
                    <p>{card.description}</p>
                    {/* Read More Button */}
                    <a
                      href="#"
                      className="flex items-center mt-3 text-pink-400"
                    >
                      <p className="mr-2">Read More</p>
                      <ArrowRightSVG />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="flex flex-wrap container px-5 py-24 mx-auto">
          {/* Image Section */}
          <div className="mb-10 lg:mb-0 2-full lg:w-1/2 flex justify-center">
            <img src="./img/pc.jpg" alt="PC image" className="rounded" />
          </div>
          {/* Skills Indicator Section */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
              My Skills
            </h1>
            {skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <h2>{skill.name}</h2>
                <div className="shadow bg-pink-200 w-full mt-1">
                  <div
                    className="bg-pink-400 text-xs text-center text-white leading-none py-1"
                    style={{ width: skill.percentage + "%" }}
                  >
                    85%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
