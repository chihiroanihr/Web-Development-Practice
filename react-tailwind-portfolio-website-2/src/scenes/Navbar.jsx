import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  // lowercase the page id
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : "" // active link
      } hover:text-yellow transition duration-500`} // hover link
      href={`#${lowerCasePage}`} // navigate to
      onClick={() => setSelectedPage(lowerCasePage)} // update active link
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  // Hamburger menu: for mobile sreens only
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  // Set Media Query for Small Devices
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

  // Navbar Background color changes when scrolled
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`fixed top-0 w-full py-6 z-40 ${navbarBackground}`}>
      <div className="flex justify-between items-center mx-auto w-5/6">
        {/* Brand Logo */}
        <h4 className="font-playfair font-bold text-3xl">RK</h4>

        {/* Navbar */}
        {isAboveSmallScreen ? (
          // ------------ For Large Screen ------------ //
          <div className="flex justify-between gap-16 font-opensans font-semibold text-sm">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          // ------------ For Small Screen ------------ //
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={menuIcon} alt="menu-icon" />
          </button>
        )}

        {/* Mobile Menu Popup */}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 w-[300px] h-full bg-blue">
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src={closeIcon} alt="close-icon" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
