import * as React from "react";
import "./App.css";
import { fetcher } from "./utils";
import useSWR from "swr";

import ReactMarkdown from "react-markdown";

function App() {
  const { data, error } = useSWR(
    "https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return (
    <div>
      <h1>hay {data.total} blogs !</h1>
      {/* React.Children.ToArray asigna una key automatica */}
      {React.Children.toArray(
        data.items.map((item) => <a href="">{item.fields.title}</a>)
      )}
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
    </div>
  );
}

export default App;
