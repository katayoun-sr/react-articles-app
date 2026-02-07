import Card from "../../components/card/Card";
import { useGetArticles } from "../../hooks/useGetArticles";

function Home() {
  const { articles, loading } = useGetArticles();

  return (
    <div className="container ">
      <ul className="grid grid-cols-5 gap-3">
        {articles.map((article) => (
          <li key={article.id}>
            <Card article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
