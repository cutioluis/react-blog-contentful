import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import moment from "moment";
import SIZES from "../commons/constants/sizes";
import remarkGfm from "remark-gfm";
import { fetcher } from "../commons/utils";
import { useParams } from "react-router-dom";
import { COLORS } from "../commons/constants/colors";

import { nord as darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Container = styled.section`
  margin: ${SIZES.containerPadding};
`;

const TitlePost = styled.h2`
  text-align: start;
  margin: 0 auto;
  max-width: 50%;
  font-size: 35px;
  color: ${COLORS.white};
`;

const DataPost = styled.div`
  margin: ${SIZES.containerMarginText};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserIcon = styled.div`
  height: 40px;
  width: 40px;
  margin: 0 10px;
  border-radius: 50%;
  background: ${COLORS.gradient3};
`;

const UserData = styled.p`
  color: ${COLORS.gray2};
`;

const HeaderPost = styled.div`
  height: 200px;
  width: 100%;
`;

const HeaderImage = styled.img`
  height: auto;
`;

const BodyPost = styled(ReactMarkdown)`
  margin: 0 auto;
  max-width: 50%;
`;

const Blog = () => {
  const params = useParams();
  const { data, error } = useSWR(
    `https://cdn.contentful.com/spaces/9ugiyt41p6d2/environments/master/entries/${params.id}?access_token=66dJAhJ0t5bD3sAHpY3GE-SEenRaOWikMeBjts2FlV4`,
    fetcher
  );

  if (error) return <div>Ha ocurrido un error compadre</div>;
  if (!data) return <div>Estamos cargando mi KING</div>;

  return (
    <Container>
      <HeaderPost>
        <HeaderImage src="" alt=""></HeaderImage>
      </HeaderPost>
      <TitlePost>{data.fields.title}</TitlePost>
      <DataPost>
        <UserIcon></UserIcon>
        <UserData>
          {data.fields.creationBy} |
          {moment(data.fields.creationDate).format("ll")}
        </UserData>
      </DataPost>
      <BodyPost
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={darcula}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {data.fields.description}
      </BodyPost>
    </Container>
  );
};

export default Blog;
