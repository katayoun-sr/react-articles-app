import articleImage from "../../assets/images/article.jpg";

function Card() {
  return (
    <article className="flex flex-col p-4  w-75 rounded-4xl overflow-hidden bg-purple-100 border border-gray-300 pb-4">
      <header className="w-full h-full aspect-3/2">
        <img className="w-full h-full rounded-t-4xl" src={articleImage} alt="" />
      </header>
      <div className=" my-4">
        <p>تست عنوان 1</p>
        <span>مدت زمان مطالعه: 10 دقیقه</span>
      </div>
      <footer className="">
        <button className="cursor-pointer bg-white py-1 px-4 rounded-full hover:shadow">ذخیره</button>
      </footer>
    </article>
  );
}

export default Card;
