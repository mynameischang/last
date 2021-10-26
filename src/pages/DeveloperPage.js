import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Parser from "html-react-parser";
import BoxComponent from "../components/BoxComponent";
import developers from "./contents/developers";
import ButtonComponent from "../components/SYBtnComponent";

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;

  margin-bottom: 10rem;
`;

const Text = styled.div`
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};

  font-family: ${(props) => props.font || "Jalnan"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "bold"};
  font-size: ${(props) => props.fontSize || "20px"};
  color: ${(props) => props.color || "black"};
  text-align: center;
  display: ${(props) => props.display};
`;

const BtnToPage = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.dark};
`;

function DeveloperPage() {
  const imgStyles = {
    margin: "0 1rem 0 1rem",
    width: "10.3rem",
  };

  window.scrollTo(0, 0);

  return (
    <>
      <Text>
        <Text
          font="Spoqa-Han-Sans"
          fontWeight="400"
          fontSize="1.2rem"
          top="10.2rem"
          bottom="5rem"
        >
          아잇 참, 개발자들이 그렇게 궁금하셨어요? 👀
        </Text>
        <Text>🏠</Text>
        <Text display="inline-block" top="2.1rem" color="#00462A">
          염라대왕
        </Text>
        <Text display="inline-block">을 만든</Text>
        <Text top="1rem" bottom="5.8rem">
          제작자를 소개합니다
        </Text>
      </Text>
      <Wrapper>
        {developers.map((developers, i) => (
          <BoxComponent
            key={"contents-" + i}
            src={developers.src}
            title={Parser(developers.title)}
            color={developers.color}
            name={developers.type}
            developer={developers.name}
            subDesc={developers.subDesc}
            style={imgStyles}
            site={developers.site}
            type={"dev"}
          />
        ))}

        <Text
          top="1.7rem"
          bottom="19.4rem"
          font="Spoqa-Han-Sans"
          fontWeight="400"
          fontSize="1.2rem"
        ></Text>
        <BtnToPage exact to="/last/">
          <ButtonComponent
            type={"others-activated"}
            text={"테스트 다시 하기"}
          />
        </BtnToPage>
      </Wrapper>
    </>
  );
}

export default DeveloperPage;
