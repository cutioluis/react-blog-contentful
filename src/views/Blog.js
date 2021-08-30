import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import { fetcher } from "../commons/utils";
import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries/${params.id}?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4`,
    fetcher
  );

  if (error) return <div>Ha ocurrido un error compadre</div>;
  if (!data) return <div>Estamos cargando mi KING</div>;

  return (
    <div>
      <h1>Featured Blogs</h1>
      <ReactMarkdown>{data.fields.description}</ReactMarkdown>
    </div>
  );
};

export default Blog;
