import React from "react";
import styled from "styled-components";
import { useTranslation } from "../src/localization";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #000000;
`

const Inner = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  min-height: 260px;
  display: flex;
  justify-content: center;
  padding: 60px 20px 0;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    max-width: 750px;
    display: block;
    padding-top: 32px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    max-width: 390px;
    display: block;
    padding-top: 32px;
  }
`

const Left = styled.div`
  width: 400px;
  margin-right: 170px;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    margin: 0 auto;
    max-width: 750px;
    width: 100%;
    padding: 0 20px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    width: 350px;
  }
`

const Right = styled.div`
  display: flex;
  gap: 20px;
  width: 540px;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    margin: 0 auto 20px;
    max-width: 750px;
    width: 100%;
    padding: 0 20px;
    justify-content: space-between;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    width: 350px;
  }
`

const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.32px;
  color: #FFFFFF;
  margin-bottom: 18px;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 12px;
  }
`

const Desc = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
  color: #FFFFFF;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    margin-bottom: 44px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 12px;
    line-height: 18px;
  }
`

const Column = styled.div`
  width: 180px; 
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    margin-bottom: 20px;
    gap: 14px;
  }
`

const ColumnTitle = styled.div`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #A5BDFF;
  margin-bottom: 7px;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`

const ColumnSpan = styled.a`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 12px;
    line-height: 18px;
  }

`

const Footer: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
      <FooterWrapper>
        <Inner>
          <Left>
            <Title>
              {t('home_footer_title')}
            </Title>
            <Desc>
              {t('home_footer_desc1')}
              <br />
              {t('home_footer_desc2')}
            </Desc>
          </Left>
          <Right>
            <Column>
              <ColumnTitle>{t('home_footer_about')}</ColumnTitle>
              {/* <ColumnSpan>{'Team'}</ColumnSpan> */}
              <ColumnSpan href={'https://medium.com/@PeopleEquity'} target={'_blank'}>{'Medium'}</ColumnSpan>
              {/* <ColumnSpan>{'Careers'}</ColumnSpan> */}
            </Column>
            <Column>
              <ColumnTitle>{t('home_footer_technology')}</ColumnTitle>
              <ColumnSpan href={'https://github.com/PeopleEquity'} target={'_blank'}>{'Github'}</ColumnSpan>
            </Column>
            <Column>
              <ColumnTitle>{t('home_footer_community')}</ColumnTitle>
              {/* <ColumnSpan>{'Telegram'}</ColumnSpan> */}
              <ColumnSpan href={'https://twitter.com/PeopleEquity_'} target={'_blank'}>{'Twitter'}</ColumnSpan>
              <ColumnSpan href={'https://discord.gg/jD5qVGBcqm'} target={'_blank'}>{'Discord'}</ColumnSpan>
              <ColumnSpan href={'https://t.me/+C603Be0HU9EwMmIx'} target={'_blank'}>{'Telegram'}</ColumnSpan>
            </Column>
          </Right>
        </Inner>
      </FooterWrapper>
  );
};

export default Footer;
