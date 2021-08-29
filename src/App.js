import * as React from "react";
import "./App.css";
import { fetcher } from "./utils";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  const { data, error } = useSWR(
    "https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4",
    fetcher
  );

  if (error) return <div>Ha ocurrido un error compadre</div>;
  if (!data) return <div>Estamos cargando mi KING</div>;

  return (
    <div>
      <h1>hay {data.total} blogs !</h1>
      <div className="lista-deBlogs">
        {React.Children.toArray(
          data.items.map((item) => (
            <Link to={`/blog/${item.sys.id}`}>{item.fields.title}</Link>
          ))
        )}
      </div>
    </div>
  );
}

function Blog() {
  const params = useParams();
  console.log(params);
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries/${params.id}?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4`,
    fetcher
  );

  if (error) return <div>Ha ocurrido un error compadre</div>;
  if (!data) return <div>Estamos cargando mi KING</div>;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <h1>Featured Blogs</h1>
      <ReactMarkdown>{data.fields.description}</ReactMarkdown>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/blog/:id">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
