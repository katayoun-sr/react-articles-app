import useLang from "../../hooks/useLang";

function Navbar(){

const {texts, setLang} = useLang()
const langs = texts.navbar
    return(
        <nav className="flex justify-between">
            <ul className="flex ">
                <li className="p-2">{langs.articlesList}</li>
                <li className="p-2">{langs.createArticle}</li>
                <li className="p-2">{langs.aboutUs}</li>
            </ul>

            <div>
                <button className="p-2" onClick={() => setLang("fa")}>فارسی</button>
                <button onClick={() => setLang("en")}>English</button>
            </div>
        </nav>
    )
}

export default Navbar;