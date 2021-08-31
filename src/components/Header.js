import React from "react";
import styled from "styled-components";
import { COLORS } from "../commons/constants/colors";
import SIZES from "../commons/constants/sizes";

const Container = styled.div`
  text-align: center;
  display: flex;
  margin: ${SIZES.containerPadding};
  flex-direction: column;
  align-items: center;
`;

const SectionTtitle = styled.h1`
  line-height: 60px;
  margin: 10px 0;
  font-size: 50px;
  background: ${COLORS.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionDescription = styled.p`
max-width: 600px;
  color: ${COLORS.white};
`;

const Header = () => {
  return (
    <Container>
      <SectionTtitle>Featured Blogs</SectionTtitle>
      <SectionDescription>
        I've been writing online since 2014, mostly about web development and
        tech careers. In total, I've written 69 articles on this site. Use the
        search below to filter by title.
      </SectionDescription>
    </Container>
  );
};

export default Header;
