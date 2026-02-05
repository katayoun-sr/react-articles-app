import useLang from "../../hooks/useLang";

function Footer() {
  const { texts } = useLang();
  const lang = texts.footer;

  return (
    <div className="h-80 bg-polet-200 ">
      <h1>{lang.description}</h1>
    </div>
  )
}

export default Footer;
