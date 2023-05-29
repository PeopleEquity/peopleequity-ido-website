import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "../../../src/localization";
import card1Img from "/public/images/home/card1.png";
import card2Img from "/public/images/home/card2.png";
import card3Img from "/public/images/home/card3.png";
import card4Img from "/public/images/home/card4.png";


const Part1Wrapper = styled.div`
  padding-top: 160px;
  width: 100%;
  background-color: #000000;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    padding-top: 80px;
  }
`

const Inner = styled.div`
  padding: 0 20px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    max-width: 750px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    max-width: 390px;
  }
`

const Title = styled.div`
  max-width: 860px;
  margin: 0 auto 20px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 24px;
    line-height: 34px;
    margin: 0 auto 12px;
    padding: 0 30px;
  }
`

const Desc = styled.p`
  max-width: 860px;
  margin: 0 auto;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    zoom: 0.86;
    font-size: 12px;
    line-height: 16px;
  }
`

const CardWrapper = styled.div`
  margin-top: 36px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    max-width: 436px;
    width: 100%;
    margin: 24px auto;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    margin-top: 24px;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  max-width: 208px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
`

const CardIcon = styled(Image)`
  width: 64px;
  height: 64px;
  margin: 32px 0 14px;
  border-radius: 50%;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    width: 48px;
    height: 48px;
    margin: 24px 0 10px;
  }
`

const CardText = styled.div`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  text-align: center;
  width: 80%;
  margin: 0 auto 24px;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 12px;
    line-height: 18px;
  }
`

const Part1: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
      <Part1Wrapper>
        <Inner>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <Title>
              {t('home_part1_title')}
            </Title>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <Desc>
              {t('home_part1_desc')}
            </Desc>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <CardWrapper>
              <Card>
                <CardIcon alt={'card'} src={card1Img} />
                <CardText>
                  {t('home_part1_card1')}
                </CardText>
              </Card>
              <Card>
                <CardIcon alt={'card'} src={card2Img} />
                <CardText>
                  {t('home_part1_card2')}
                </CardText>
              </Card>
              <Card>
                <CardIcon alt={'card'} src={card3Img} />
                <CardText>
                  {t('home_part1_card3')}
                </CardText>
              </Card>
              <Card>
                <CardIcon alt={'card'} src={card4Img} />
                <CardText>
                  {t('home_part1_card4')}
                </CardText>
              </Card>
            </CardWrapper>
          </ScrollAnimation>
        </Inner>
      </Part1Wrapper>
  );
};

export default Part1;
