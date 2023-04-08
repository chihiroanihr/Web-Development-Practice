import linkedInIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7 my-10">
      {/* LinkedIn */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/rhina-kim-568ab3178/"
        target="_blank"
        rel="noreferrer" // no bugs/issues for older browsers when _blank
      >
        <img src={linkedInIcon} alt="linkedin-link" />
      </a>
      {/* Twitter */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitterIcon} alt="twitter-link" />
      </a>
      {/* Facebook */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookIcon} alt="facebook-link" />
      </a>
      {/* Instagram */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramIcon} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
