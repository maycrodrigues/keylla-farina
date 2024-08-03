import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

import logo from "./assets/keyllafarina-logo.svg";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="flex flex-col items-center gap-10">
        <img src={logo} className="w-60 h-60" alt="Keylla Farina" />
        <h1 className="font-libre text-3xl">Keylla Farina</h1>
        <div className="flex flex-row gap-4">
          <a
            href="mailto:contato@keyllafarina.com"
            title="contato@keyllafarina.com"
            target="_blank"
          >
            <MdEmail size={"2em"} />
          </a>
          <a href="#" target="_blank" title="Entre em contato via Whatsapp">
            <IoLogoWhatsapp size={"1.9em"} />
          </a>
          <a
            href="http://www.instagram.com/keyllafarinafotos"
            title="@keyllafarinafotos"
            target="_blank"
          >
            <RiInstagramFill size={"2em"} />
          </a>
          <a
            href="http://www.facebook.com/keyllafarinafotos"
            title="@keyllafarinafotos"
            target="_blank"
          >
            <FaFacebook size={"1.9em"} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
