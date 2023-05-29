import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  & > div:first-child {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    position: relative;
    background: conic-gradient(from 180deg at 50% 50%, #6EA7D0 0deg, #C1E9B9 360deg);
    animation-name: animation1;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
      width: 270px;
      height: 270px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
      width: 180px;
      height: 180px;
    }
    @keyframes animation1
    {
      from {transform: rotate(0);}
      to {transform: rotate(360deg);}
    }
  }
  & > div:nth-child(2n) {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: conic-gradient(from 180deg at 50% 50%, #6EA7D0 0deg, #C1E9B9 360deg);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50px;
    top: 50px;
    animation-name: animation2;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
      width: 205px;
      height: 205px;
      left: 37.5px;
      top: 37.5px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
      width: 130px;
      height: 130px;
      left: 25px;
      top: 25px;
    }
    @keyframes animation2
    {
      from {transform: rotate(0);}
      66% {transform: rotate(360deg);}
      to {transform: rotate(360deg);}
    }
  }

  & > div:last-child {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: conic-gradient(from 180deg at 50% 50%, #6EA7D0 0deg, #C1E9B9 360deg);
    position: absolute;
    left: 100px;
    top: 100px;
    animation-name: animation3;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
      width: 120px;
      height: 120px;
      left: 75px;
      top: 75px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
      width: 80px;
      height: 80px;
      left: 50px;
      top: 50px;
    }
    @keyframes animation3
    {
      from {transform: rotate(0);}
      33% {transform: rotate(360deg);}
      to {transform: rotate(360deg);}
    }
  }
`

const Round: React.FC<React.PropsWithChildren> = () => {
  return (
      <Wrapper>
        <div />
        <div />
        <div />
      </Wrapper>
  );
};

export default Round;
