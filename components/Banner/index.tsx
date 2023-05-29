import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "../../src/localization";

const BannerWrapper = styled.div`
  width: 100%;
  background-color: #000000;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    margin-top: 70px;
  }
`

const Inner = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`

const Video = styled.video`
  object-fit: contain;
  width: 100%;
  height: auto;
  position: relative;
`

const TextWrapper1 = styled.div`
  max-width: 390px;
  padding: 0 20px;
  display: none;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    display: block;
    margin-top: 30px;
    max-width: 750px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    display: block;
    margin-top: 30px;
  }
`

const TextWrapper2 = styled.div`
  position: absolute;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  top: 40%;
  left: 10%;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    display: none;
  }
`

const TextTitle = styled.p`
  font-family: 'Nohemi';
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 72px;
  color: #ffffff;
  margin-bottom: 32px;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 12px;
  }
`

const TextDesc = styled.p`
  margin-bottom: 32px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 45px;
  color: #ffffff;
  max-width: 80%;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    font-size: 24px;
    line-height: 36px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 28px;
  }
`

const TextDesc1 = styled(TextDesc)`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    display: block;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    display: none;
  }
`

const TextDesc2 = styled(TextDesc)`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    display: block;
  }
`

const Banner: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
      <BannerWrapper>
        <Inner>
          <TextWrapper1>
            <TextTitle>
              {'PeopleEquity'}
            </TextTitle>
            <TextDesc1>
              {t('home_banner_desc')}
            </TextDesc1>
            <TextDesc2>
              {t('home_banner_desc1')}
              <br />
              {t('home_banner_desc2')}
            </TextDesc2>
          </TextWrapper1>
          <Video
              id={'banner'}
              src={'/banner/bg.webm'}
              controls={false}
              loop={true}
              muted={true}
              autoPlay={true}
          />
          <TextWrapper2>
            <TextTitle>
              {'PeopleEquity'}
            </TextTitle>
            <TextDesc>
              {t('home_banner_desc')}
            </TextDesc>
          </TextWrapper2>
        </Inner>
      </BannerWrapper>
  );
};

export default Banner;
