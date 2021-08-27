import "./App.css";
import { fetcher } from "./utils";
import useSWR from "swr";

function App() {
  const { data, error } = useSWR(
    "https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <div>hay {data.total} blogs !</div>;
}

export default App;
