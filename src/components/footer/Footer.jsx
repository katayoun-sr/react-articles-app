import useLang from "../../hooks/useLang";

function Footer() {
  const { texts } = useLang();
  const lang = texts.footer;

  return (
    <footer className="h-60 bg-purple-900 w-ful text-white ">
      <div className="max-w-7xl m-auto flex items-center justify-center h-full">
        <h1 className="text-2xl font-bold">{lang.description}</h1>
      </div>
    </footer>
  );
}

export default Footer;
