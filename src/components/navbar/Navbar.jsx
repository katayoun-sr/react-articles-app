import { Link } from "react-router-dom";
import useLang from "../../hooks/useLang";

function Navbar() {
  const { texts, setLang } = useLang();
  const lang = texts.navbar;
  const menuItems = [
    { key: lang.articlesList, path: "/" },
    { key: lang.createArticle, path: "/create-article" },
    { key: lang.aboutUs, path: "/about-us" },
  ];
  return (
    <nav className="fixed w-full py-5 px-10 text-white">
      <div className="flex justify-between m-auto">
        <Link to="/">
          <img src="/logo.svg" alt="contentify" className="w-45" />
        </Link>
        <ul className="flex bg-white/20 backdrop-blur-md py-1 px-4 rounded-full">
          {menuItems.map((item) => (
            <li className="py-1 px-6 hover:bg-white/30 cursor-pointer rounded-full">
              <Link to={item.path}>{item.key}</Link>
            </li>
          ))}
        </ul>
        <div>
          <button
            className="p-2 hover:bg-white/30 rounded-full cursor-pointer"
            onClick={() => setLang("fa")}
          >
            فارسی
          </button>
          <button
            className="p-2 hover:bg-white/30 rounded-full cursor-pointer"
            onClick={() => setLang("en")}
          >
            English
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
