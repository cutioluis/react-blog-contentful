import * as React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import { fetcher } from "../commons/utils";
import Footer from "../components/Footer";

const Home = () => {
  const { data, error } = useSWR(
    "https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4",
    fetcher
  );

  if (error) return <div>Ha ocurrido un error compadre</div>;
  if (!data) return <div>Estamos cargando mi KING</div>;

  return (
    <div>
      <h1>Lasted Blogs</h1>
      <div>
        {React.Children.toArray(
          data.items.map((item) => (
            <Link
              style={{
                display: "flex",
              }}
              to={`/blog/${item.sys.id}`}
            >
              {item.fields.title}
            </Link>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
