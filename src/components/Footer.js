import React from "react";
import styled from "styled-components";
import { COLORS } from "../commons/constants/colors";
import SIZES from "../commons/constants/sizes";

const FooterText = styled.footer`
  margin: ${SIZES.containerPadding};
  text-align: center;
  color: ${COLORS.white};
`;

const ItemCero = styled.span`
  background: ${COLORS.gradient2};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ItemOne = styled.span`
  background: ${COLORS.gradient3};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Footer = () => {
  return (
    <FooterText>
      Power by <ItemCero>Contenful</ItemCero> and <ItemOne>React</ItemOne>{" "}
    </FooterText>
  );
};

export default Footer;
