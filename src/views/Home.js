import * as React from "react";
import useSWR from "swr";
import { fetcher } from "../commons/utils";

/* Components */
import Header from "../components/Header";
import SearchBlog from "../components/SearchBlog";
import Footer from "../components/Footer";
import ListPost from "../components/ListPost";

const Home = () => {
  const { data, error } = useSWR(
    "https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4",
    fetcher
  );

  if (error) return <div>Ha ocurrido un error compadre</div>;
  if (!data) return <div>Loading....</div>;

  return (
    <>
      <Header />  
      <SearchBlog />
      <ListPost data={data} error={error} />
      <Footer />
    </>
  );
};

export default Home;
