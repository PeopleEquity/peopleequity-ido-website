import React from "react";
import styled from "styled-components";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import userImg from "/public/images/home/user.png";
import communityImg from "/public/images/home/community.png";
import enterpriseImg from "/public/images/home/enterprise.png";
import Round from "../../Round";
import { useTranslation } from "../../../src/localization";

const Part3Wrapper = styled.div`
  padding: 240px 20px 160px;
  width: 100%;
  background-color: #000000;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    padding: 160px 20px 110px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    padding: 80px 20px 60px;
  }
`

const Inner = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    max-width: 750px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    max-width: 390px;
  }
`

const Title = styled.div`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin-bottom: 60px;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 12px;
  }
`

const CardWrapper = styled.div`
  justify-content: space-between;
  gap: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    gap: 36px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    gap: 14px 18px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

const Card = styled.div`
  flex: 1;
  min-height: 320px;
  border-radius: 12px;
  padding: 32px 30px;
  &.user {
    background: #f45555;
  }
  &.community {
    background: #6eaee2;
  }
  &.enterprise {
    background: #825af4;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    padding: 26px 24px;
    min-height: 256px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    padding: 20px 18px;
    min-height: unset;
  }
`

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 30px;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    margin-bottom: 16px;
  }
`

const CardTitle = styled.p`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 31px;
  text-align: left;
  letter-spacing: -0.72px;
  color: #FFFFFF;
  margin-left: 18px;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 14px;
    line-height: 20px;
  }
`

const Desc = styled.p`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    zoom: 0.86;
    font-size: 12px;
    line-height: 16px;
  }
`

const CardIcon = styled(Image)`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    width: 52px;
    height: 52px;
  }
`

const Part3: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
      <Part3Wrapper>
        <Inner>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <Title>{t('home_part3_title')}</Title>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <CardWrapper>
              <Card className={'user'}>
                <CardTop>
                  <CardIcon alt={'user'} src={userImg} />
                  <CardTitle>{t('home_part3_card1_title')}</CardTitle>
                </CardTop>
                <Desc className={'columns'}>
                  {t('home_part3_card1_desc1')}
                  <br />
                  {t('home_part3_card1_desc2')}
                  <br />
                  {t('home_part3_card1_desc3')}
                </Desc>
              </Card>
              <Card className={'community'}>
                <CardTop>
                  <CardIcon alt={'community'} src={communityImg} />
                  <CardTitle>{t('home_part3_card2_title')}</CardTitle>
                </CardTop>
                <Desc className={'columns'}>
                  {t('home_part3_card2_desc')}
                </Desc>
              </Card>
              <Card className={'enterprise'}>
                <CardTop>
                  <CardIcon alt={'enterprise'} src={enterpriseImg} />
                  <CardTitle>{t('home_part3_card3_title')}</CardTitle>
                </CardTop>
                <Desc className={'columns'}>
                  {t('home_part3_card3_desc')}
                </Desc>
              </Card>
            </CardWrapper>
          </ScrollAnimation>
        </Inner>
      </Part3Wrapper>
  );
};

export default Part3;
