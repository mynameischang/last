import React, { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";
import contents from "./contents/questions";
import ProgressBar from "../components/ProgressBar";
import Parser from "html-react-parser";
import { Link, Redirect } from "react-router-dom";
import Reaper from "../assets/common/reaper.png";
import g3 from "../assets/common/g3.png";
import g1 from "../assets/common/g1.gif";

const Wrapper = styled.div`
  display: ${(props) => (props.isShow === true ? "flex" : "none")};
  
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: bisque;
  width: 100%; 
  height: 100vh;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: "Jalnan";
  font-size: 2.5rem;
  text-align: center;
  margin-top: 1.9rem;
  margin-bottom: 8.4rem;
`;
const Footer = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  margin-top: 8.9rem;
  color: #a7a7a7;
`;

const Msg = styled.div`
  font-family: "Spoqa-Han-Sans";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: #a7a7a7;
`;
const Text = styled.div`
  font-family: "Jalnan";
  font-size: 1.9rem;
  font-weight: light;
  margin: 0.5rem;
  text-align: center;
  color: white;
  margin-top: 3.9rem;
  margin-bottom: 8.4rem;
`;

const Logo = styled.img`
  width: 1.2rem;
`;

function QuizPage({ isShow }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [isProcess, setIsProcess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [linkTo, setLinkTo] = useState("");
  const linkResult = "/last/result/";
  const [typeOne, setTypeOne] = useState(0);
  const [typeTwo, setTypeTwo] = useState(0);
  const [typeThree, setTypeThree] = useState(0);
  const [typeFour, setTypeFour] = useState(0);
  const [finalType, setFinalType] = useState(0);
  const [turn, setTurn] = useState(0);

  const onConditionChange = (key) => {
    let record =
      contents[questionNum].weight * contents[questionNum].answers[key].score; //dhld
    if (questionNum === 3 && key === 2) {
      setIsLoading(true);
      let num = 500;
      setFinalType(num);
      setLinkTo(linkResult + num);
      setTimeout(function () {
        setIsLoading(false);
      }, 3000);
    } else if (questionNum === 0 || questionNum === 1) {
      setTypeOne(typeOne + record);
    } else if (questionNum === 2 || questionNum === 3 || questionNum === 4) {
      setTypeTwo(typeTwo + record);
    } else if (questionNum === 5 || questionNum === 6 || questionNum === 7) {
      setTypeThree(typeThree + record);
    } else if (questionNum >= 8) {
      setTypeFour(typeFour + record);
      if (questionNum === 9) {
        var result = typeOne + typeTwo + typeThree + typeFour -1
                
        /*
        if (typeOne >= 5) {
            result = result + 8;
        }
        if (typeTwo >= 5) {
            result = result + 4;
        }
        if (typeThree >= 5) {
            result = result + 2;
        }
        if (typeFour + record >= 5) {
            result = result + 1;
        }
        else {
            result = result + 0;
        }
        */
        let num = result;
        setFinalType(num);
        setLinkTo(linkResult + num);

        setIsLoading(true);
        setTimeout(function () {
          setIsLoading(false);
          setIsProcess(true);
        }, 2500);
      }
    }
    setQuestionNum(questionNum + 1);
    setTurn(turn + 1);
  };

  const onClickResultBtn = () => {
    setIsProcess(false);
    setQuestionNum(16);
  };

  if (questionNum === 10) {
    return (
      <>
        <Wrapper isShow={isLoading}>
          <Title>당신의 남은 수명</Title>
          
          <Msg> 당신의 남은 수명을 찾고 있어요</Msg>
          
          <Footer>
            made by 염.대.전 &nbsp;
            <Logo src={Reaper} />
          </Footer>
        </Wrapper>
        <Wrapper isShow={isProcess}>
          <Container>
            <Text>테스트 완료! </Text>
            <Link to={linkTo} style={{ textDecoration: "none" }}>
              <ButtonComponent
                type={"result"}
                text="나의 수명 확인하기"
                onclick={onClickResultBtn}
              ></ButtonComponent>
            </Link>
          </Container>
        </Wrapper>
      </>
    );
  } else if (finalType === 150) {
    return (
      <div>
        <Redirect to={linkTo}></Redirect>
      </div>
    );
  } else if (questionNum < 10 && finalType !== 150) {
    return (
      <>
        <Wrapper isShow={isShow}>
          <ProgressBar completed={(questionNum + 1) * 10} rotation={turn} />

          <Container>
            <Text>{Parser(contents[questionNum].question)} </Text>
            {contents[questionNum].answers.map((answer, i) => (
              <ButtonComponent
                key={"answer-" + i}
                idx={i}
                text={Parser(answer.text)}
                onclick={onConditionChange}
              />
            ))}
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default QuizPage;
