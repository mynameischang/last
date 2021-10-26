import React, { useState } from "react";
import styled from "styled-components";
import StartButtonComponent from "../components/StartButtonComponent";
import QuizPage from "./QuizPage";
import Reaper from "../assets/common/reaper.png";
import hi from "../assets/common/hi2.png";
import back from "../assets/common/bakc_gif.gif"


const Wrapper = styled.div`
  display: ${(props) => (props.isShow === true ? "flex" : "none")};
  width: 100%;
  height: auto;
  background-color: black;
  background: url(${back});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  margin-top: 8rem;
  margin-bottom: 40rem;
  background-color: white;
  background-position: center;
  border-radius: 0.5rem;
  border: 3px solid red;

  text-align: center;
`;
const Intro = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: #ff0000;
  margin-top: 2.2rem;
  margin-bottom: 4rem;
`;
const Title = styled.div`
  font-family: "Jalnan";
  font-size: 2.5rem;
  text-align: center;
  color: #ff0000;
  margin-top: 3.9rem;
  margin-bottom: 5.4rem;
  margin-bottom: 5.4rem;
`;
const Footer = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  margin-top: 8.9rem;
  margin-top: 5.9rem;
  margin-bottom: 2rem;
  color: #ff0000;
`;

const Logo = styled.img`
  width: 1.2rem;
`;

const TitleLogo = styled.img`
  width: 30rem;
`;
function LandingPage() {
  const [isShow, setIsShow] = useState(true);
  const [isQuizShow, setIsQuizShow] = useState(false);

  const onClickStartBtn = () => {
    setIsShow(false);
    setIsQuizShow(true);
  };
  return (
    <>
      <Wrapper isShow={isShow}>
        <Container>
          <Intro>
            나는 수명은 얼마나 남았을까?
            <br /> 남은 수명 찾기 테스트
            <p>
              <TitleLogo src={hi} />
            </p>
          </Intro>

          <Title>
            생<p>사</p>
            <p></p>부
          </Title>
          <StartButtonComponent
            type={true}
            text={"시작하기"}
            onclick={onClickStartBtn}
          />
          <Footer>
            염.대.전 &nbsp;
            <Logo src={Reaper} />
          </Footer>
        </Container>
      </Wrapper>
      <QuizPage isShow={isQuizShow} />
    </>
  );
}

export default LandingPage;
