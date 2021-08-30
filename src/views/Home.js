import * as React from "react";
import useSWR from "swr";
import { Link } from "react-router-dom";
import { fetcher } from "../commons/utils";
import Footer from "../components/Footer";
import styled from "styled-components";
import { COLORS } from "../commons/constants/colors";
import SIZES from "../commons/constants/sizes";

const Container = styled.div`
  display: flex;
  margin: ${SIZES.containerPadding};
  flex-direction: column;
  align-items: center;
`;

const SectionTtitle = styled.h1`
  font-size: 50px;
  background: ${COLORS.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionDescription = styled.p`
  color: ${COLORS.white};
`;

const Home = () => {
  const { data, error } = useSWR(
    "https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4",
    fetcher
  );

  if (error) return <div>Ha ocurrido un error compadre</div>;
  if (!data) return <div>Estamos cargando mi KING</div>;

  return (
    <Container>
      <SectionTtitle>Featured Blogs</SectionTtitle>
      <SectionDescription>
        I've been writing online since 2014, mostly about web development and
        tech
      </SectionDescription>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
