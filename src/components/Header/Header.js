import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <LinkWrapper>
            <NavLink href="/sale">
              <MainText>Sale</MainText>
              <HoverText>Sale</HoverText>
            </NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink href="/new">
              <MainText>New&nbsp;Releases</MainText>
              <HoverText>New&nbsp;Releases</HoverText>
            </NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink href="/men">
              <MainText>Men</MainText>
              <HoverText>Men</HoverText>
            </NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink href="/women">
              <MainText>Women</MainText>
              <HoverText>Women</HoverText>
            </NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink href="/kids">
              <MainText>Kids</MainText>
              <HoverText>Kids</HoverText>
            </NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink href="/collections">
              <MainText>Collections</MainText>
              <HoverText>Collections</HoverText>
            </NavLink>
          </LinkWrapper>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  --line-height: 1.5em;
  font-size: 1.125rem;
  line-height: var(--line-height);
  max-height: var(--line-height);
  color: var(--color-gray-900);
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transform: translateY(0);
    transition: transform 500ms;

    ${LinkWrapper}:hover & {
      transform: translateY(calc(var(--line-height) * -1));
      transition: transform 250ms;
    }
  }
`;

const NavLinkText = styled.span`
  display: block;
`;

const MainText = styled(NavLinkText)`
  font-weight: ${WEIGHTS.medium};
`;

const HoverText = styled(NavLinkText)`
  font-weight: ${WEIGHTS.bold};
`;

export default Header;
