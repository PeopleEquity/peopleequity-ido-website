import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Round from "../../../components/Round"
import { useTranslation } from "../../../src/localization";

const Part2Wrapper = styled.div`
  width: 100%;
  background-color: #000000;
`

const Inner = styled.div`
  padding: 240px 20px 0;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    padding: 160px 20px 0;
    max-width: 750px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    max-width: 390px;
    padding: 80px 20px 0;
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    display: block;
  }
`

const TopLeft = styled.div`
  font-family: 'Nohemi';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  color: #FFFFFF;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 36px;
    line-height: 36px;
    min-width: 260px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 12px;
  }
`

const TopRight = styled.div`
  max-width: 540px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 14px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 12px;
    zoom: 0.83;
    margin-bottom: 12px;
  }
`

const Bottom = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`

const BottomLeft = styled.div`
  position: relative;
  z-index: 1;
`

const BottomRight = styled.div``

const LeftText = styled.ul`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin-bottom: 100px;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 19px;
    line-height: 38px;
    margin-bottom: 80px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 60px;
  }
`
const StyledLi = styled.li`
  margin-left: 18px;
`

const JumpTo = styled.div`
  cursor: pointer;
  padding: 0 30px 0 20px;
  height: 56px;
  border: 1px solid #ffffff;
  width: 350px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    width: 240px;
    height: 42px;
    padding: 0 12px 0 10px;
    margin-bottom: 0px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    width: 156px;
    height: 28px;
  }
`

const RoundWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`

const StyledP = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 12px;
    zoom: 0.83;
  }
`

const Go = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 250;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 12px;
    zoom: 0.66;
  }
`

const Part2: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
      <Part2Wrapper>
        <Inner>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <Top>
              <TopLeft>
                {t('home_part2_title')}
              </TopLeft>
              <TopRight>
                {t('home_part2_desc')}
              </TopRight>
            </Top>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInUp">
            <Bottom>
              <BottomLeft>
                <LeftText>
                  <StyledLi>{t('home_part2_list1')}</StyledLi>
                  <StyledLi>{t('home_part2_list2')}</StyledLi>
                  <StyledLi>{t('home_part2_list3')}</StyledLi>
                  <StyledLi>{t('home_part2_list4')}</StyledLi>
                </LeftText>
                <JumpTo>
                  <StyledP>{t('home_part2_jumpTo')}</StyledP>
                  <Go>{'➔'}</Go>
                </JumpTo>
              </BottomLeft>
              <BottomRight>
                <RoundWrapper>
                  <Round />
                </RoundWrapper>
              </BottomRight>
            </Bottom>
          </ScrollAnimation>
        </Inner>
      </Part2Wrapper>
  );
};

export default Part2;
