import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialIcons = () => {
  const DEFAULT_ICON_SIZE = "2em";

  const icons = [
    {
      href: "mailto:contato@keyllafarina.com",
      title: "ontato@keyllafarina.com",
      SocialIcon: <MdEmail size={DEFAULT_ICON_SIZE} />,
    },
    {
      href: "",
      title: "Entre em contato via Whatsapp",
      SocialIcon: <IoLogoWhatsapp size={DEFAULT_ICON_SIZE} />,
    },
    {
      href: "http://www.facebook.com/keyllafarinafotos",
      title: "@keyllafarinafotos",
      SocialIcon: <RiInstagramFill size={DEFAULT_ICON_SIZE} />,
    },
    {
      href: "http://www.instagram.com/keyllafarinafotos",
      title: "@keyllafarinafotos",
      SocialIcon: <FaFacebook size={DEFAULT_ICON_SIZE} />,
    },
  ];

  return (
    <div className="flex flex-row gap-4">
      <a
        href="mailto:contato@keyllafarina.com"
        title="contato@keyllafarina.com"
        target="_blank"
      >
        <MdEmail size={"2em"} />
      </a>
    </div>
  );
};

export default SocialIcons;
