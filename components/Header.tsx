import React, { useState, useMemo, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useOnClickOutside }  from "../src/hooks/useOnClickOutside"
import logoImg from "/public/images/home/logo.png";
import closeImg from "/public/images/home/close.png";
import menuImg from "/public/images/home/menu.png";
import arrowImg from "/public/images/home/arrow.png";
import { useTranslation } from "../src/localization";
import languageList from "../src/localization/config/languages";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #000000;
  @media (max-width: ${(props) => props.theme.breakpoints.table}px) {
    height: 85px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    height: 70px;
    position: fixed;
    z-index: 1;
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    max-width: 390px;
  }
`

const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: start;
`

const HeaderRight = styled.div``

const Logo = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: #ffffff;
  display: flex;
  align-items: center;
`

const LogoImg = styled(Image)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`

const Menu = styled.ul`
  margin-left: 120px;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    display: none;
  }
`

const MenuIconWrapper = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    display: flex;
    align-items: center;
  }
`

const MenuIcon = styled(Image)`
  width: 24px;
  height: 24px;
`

const CloseIcon = styled(MenuIcon)``

const MenuItem = styled.li`
  margin: 0 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  opacity: 0.7;
  list-style: none;
  cursor: pointer;
  &.active {
    font-weight: 600;
    opacity: 1;
  }
`

const MobileMenu = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  position: fixed;
  z-index: 1;
  background: black;
  padding: 0 20px;
`

const Line = styled.div`
  background: #4e639b;
  transform: matrix(1, 0, 0, -1, 0, 0);
  height: 0.5px;
`

const MobileMenuItem = styled.div`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  height: 22px;
  margin: 16px 0;
`

const MobileMenuItem2 = styled.div`
  height: 22px;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
`

const MobileMenuItemTitle = styled.div`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
`

const MobileMenuItemArrow = styled(Image)`
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
  &.active {
    transform: rotate(0deg);
  }
`

const MobileSubMenuItemWrapper = styled.div``

const MobileSubMenuItem = styled.div`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 6px 0 6px 12px;
  cursor: pointer;
`

const LanguageSwitchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.xsMobile}px) {
    display: none;
  }
`

const LanguageInner = styled.div`
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  cursor: pointer;
`

const LanguageSwitchMenu = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  background: #000000;
  border-radius: 12px;
  z-index: 2;
  overflow: hidden;
  display: none;
  &.active {
    display: block;
  }
`

const LanguageSwitchMenuItem = styled.div`
  padding: 12px 16px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  opacity: 0.7;
  white-space: pre;
  cursor: pointer;
  &.active {
    opacity: 1;
    background: #272333;
  }
`

const Header: React.FC<React.PropsWithChildren> = () => {
  const { t, setLanguage, currentLanguage } = useTranslation()

  const [isShowMenu, setShowMenu] = useState(false)
  const [isShowLanuage, setShowLanuage] = useState(false)
  const [lanuage, setLanuage] = useState(currentLanguage.language)
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)

  const node = useRef<HTMLDivElement>()
  useOnClickOutside(node, setShowLanuage ? () => setShowLanuage(false) : undefined)
  return (
      <HeaderWrapper>
        <Inner>
          <HeaderLeft>
            <Logo>
              <LogoImg alt={'logo'} src={logoImg} />
              {'PeopleEquity'}
            </Logo>
            {/*<Menu>
              <MenuItem className={'active'}>{'Home'}</MenuItem>
              <MenuItem>{'EquitySwap'}</MenuItem>
              <MenuItem>{'Ido'}</MenuItem>
              <MenuItem>{'FAQ'}</MenuItem>
            </Menu>*/}
          </HeaderLeft>
          <HeaderRight>
            <MenuIconWrapper>
              {
                !isShowMenu ?
                    <MenuIcon alt={'menu'} src={menuImg} onClick={() => {setShowMenu(true)}} /> :
                    <CloseIcon alt={'menu'} src={closeImg} onClick={() => {setShowMenu(false)}} />
              }
            </MenuIconWrapper>
            <LanguageSwitchWrapper ref={node as any}>
              <LanguageInner onClick={() => {setShowLanuage(true)}} >{lanuage}</LanguageInner>
              <LanguageSwitchMenu className={isShowLanuage ? 'active' : ''}>
                <LanguageSwitchMenuItem
                    className={currentLanguage.code === 'en' ? 'active' : ''}
                    onClick={() => {
                      setLanguage(languageList['en-US'])
                      setShowLanuage(false)
                      setLanuage('English')
                }}>
                  {'English'}
                </LanguageSwitchMenuItem>
                <LanguageSwitchMenuItem
                    className={currentLanguage.code === 'zh-cn' ? 'active' : ''}
                    onClick={() => {
                  setLanguage(languageList['zh-CN'])
                  setShowLanuage(false)
                  setLanuage('简体中文')
                }}>
                  {'简体中文'}
                </LanguageSwitchMenuItem>
                <LanguageSwitchMenuItem
                    className={currentLanguage.code === 'zh-tw' ? 'active' : ''}
                    onClick={() => {
                      setLanguage(languageList['zh-TW'])
                  setShowLanuage(false)
                  setLanuage('繁體中文')
                }}>
                  {'繁體中文'}
                </LanguageSwitchMenuItem>
              </LanguageSwitchMenu>
            </LanguageSwitchWrapper>
          </HeaderRight>
        </Inner>
        {
          isShowMenu ?
              <MobileMenu>
                <Line />
                {/*<MobileMenuItem>{'Home'}</MobileMenuItem>
                <MobileMenuItem>{'EquitySwap'}</MobileMenuItem>
                <MobileMenuItem>{'Credit Data'}</MobileMenuItem>
                <MobileMenuItem>{'Wallet'}</MobileMenuItem>
                <MobileMenuItem2 onClick={() => {setActive(!active)}}>
                  <MobileMenuItemTitle>
                    {'Explore'}
                  </MobileMenuItemTitle>
                  <MobileMenuItemArrow alt={'arrow'} src={arrowImg} className={active ? 'active' : ''} />
                </MobileMenuItem2>
                {
                  active ?
                      <MobileSubMenuItemWrapper>
                        <MobileSubMenuItem>{'Income'}</MobileSubMenuItem>
                        <MobileSubMenuItem>{'Team'}</MobileSubMenuItem>
                        <MobileSubMenuItem>{'FAQ'}</MobileSubMenuItem>
                      </MobileSubMenuItemWrapper> : null
                }*/}
                <MobileMenuItem2 onClick={() => {setActive2(!active2)}}>
                  <MobileMenuItemTitle>
                    {t('lanuage')}
                  </MobileMenuItemTitle>
                  <MobileMenuItemArrow alt={'arrow'} src={arrowImg} className={active2 ? 'active' : ''} />
                </MobileMenuItem2>
                {
                  active2 ?
                      <MobileSubMenuItemWrapper>
                        <MobileSubMenuItem
                            onClick={() => {
                              setLanguage(languageList['en-US'])
                              setShowMenu(false)
                            }}
                        >{'English'}</MobileSubMenuItem>
                        <MobileSubMenuItem
                            onClick={() => {
                              setLanguage(languageList['zh-CN'])
                              setShowMenu(false)
                            }}
                        >{'简体中文'}</MobileSubMenuItem>
                        <MobileSubMenuItem
                            onClick={() => {
                              setLanguage(languageList['zh-TW'])
                              setShowMenu(false)
                            }}
                        >{'繁體中文'}</MobileSubMenuItem>
                      </MobileSubMenuItemWrapper> : null
                }
              </MobileMenu> : null
        }
      </HeaderWrapper>
  );
};

export default Header;
