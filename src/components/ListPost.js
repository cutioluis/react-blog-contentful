import React from "react";
import styled from "styled-components";
import moment from "moment";

import { COLORS } from "../commons/constants/colors";
import SIZES from "../commons/constants/sizes";
import { Link } from "react-router-dom";

const SectionPost = styled.section`
  margin: ${SIZES.containerPadding};
`;

const PostContainer = styled(Link)`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding: 30px;
  margin: 50px auto;
  max-width: 800px;
  transition: transform 150ms;
  background-color: ${COLORS.black4};

  &:hover {
    transform: translateY(-10px);
  }
`;

const PostTitle = styled.h3`
  color: ${COLORS.white};
`;

const PostDescription = styled.p`
  color: white;
  margin: ${SIZES.containerMarginText};
`;

const ListPost = ({ data }) => {
  return (
    <SectionPost>
      {React.Children.toArray(
        data.items.map((item) => (
            <PostContainer to={`/blog/${item.sys.id}`}>
              <PostTitle>{item.fields.title}</PostTitle>
              <PostDescription>
                {moment(item.fields.creationDate).format("ll")}
              </PostDescription>
            </PostContainer>
        ))
      )}
    </SectionPost>
  );
};

export default ListPost;
