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
    <nav className="fixed w-full py-2 px-10 backdrop-blur-md shadow-[0px_8px_6px_-1px_rgba(147,51,234,0.15)] text-purple-900">
      <div className="flex justify-between m-auto">
        <Link to="/">
          <img src="/logo.svg" alt="contentify" className="w-45 transition-transform duration-300 hover:scale-105" />
        </Link>
        <ul className="flex bg-purple-100  py-1 px-4 rounded-full">
          {menuItems.map((item, index) => (
            <li key={index} className="py-1 px-6 hover:bg-white cursor-pointer rounded-full">
              <Link to={item.path}>{item.key}</Link>
            </li>
          ))}
        </ul>
        <div>
          <button
            className="py-2 px-4 hover:bg-purple-100 rounded-full cursor-pointer"
            onClick={() => setLang("fa")}
          >
            فارسی
          </button>
          <button
            className="py-2 px-4 hover:bg-purple-100 rounded-full cursor-pointer"
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
