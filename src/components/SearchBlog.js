import React from "react";
import styled from "styled-components";
import { COLORS } from "../commons/constants/colors";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchInput = styled.input`
  color: ${COLORS.gray2};
  width: 40%;
  padding: 20px;
  height: 50px;
  border: none;
  background-color: ${COLORS.black3};
  border-radius: 5px;
`;

const SearchBlog = () => {
  return (
    <Container>
      <SearchInput placeholder="Search Post" />
    </Container>
  );
};

export default SearchBlog;
