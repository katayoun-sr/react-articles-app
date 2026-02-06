import { Link } from "react-router-dom";
import articleImage from "../../assets/images/article.jpg";

function Card() {
  return (
    <article className="flex flex-col  py-4 px-2 h-100 justify-between rounded-2xl overflow-hidden shadow-[0px_8px_6px_-1px_rgba(147,51,234,0.15)] hover:scale-105 border border-gray-300">
      <Link to="">
        <header className="w-full h-full">
          <img
            className="w-full h-full rounded-t-2xl object-cover"
            src={articleImage}
            alt=""
          />
        </header>
        <div className=" my-4">
          <p>تست عنوان 1</p>
          <span>مدت زمان مطالعه: 10 دقیقه</span>
        </div>
      </Link>
      <footer className="">
        <button className="cursor-pointer bg-purple-100 py-1 px-4 rounded-full hover:bg-purple-300">
          ذخیره
        </button>
      </footer>
    </article>
  );
}

export default Card;
