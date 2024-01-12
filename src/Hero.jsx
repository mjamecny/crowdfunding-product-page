import { useState } from "react"
import styled from "styled-components"

const StyledHero = styled.div`
  background: url("image-hero-mobile.jpg") no-repeat;
  background-size: cover;

  @media screen and (min-width: 45em) {
    background: url("image-hero-desktop.jpg") no-repeat;
    background-size: cover;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2.4rem;
  padding-inline: 1.6rem;
  position: relative;
  max-width: 102.4rem;
  margin: 0 auto;
`

const Logo = styled.img`
  z-index: 10;
`

const OC = styled.img`
  cursor: pointer;
  z-index: 10;

  @media screen and (min-width: 45em) {
    display: none;
  }
`

const NavList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: calc(100% - 3.2rem);
  margin: 0 auto;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 7px;
  z-index: 10;

  @media screen and (min-width: 45em) {
    margin: 0;
    position: static;
    width: auto;
    display: flex;
    background-color: transparent;
  }
`

const ListItem = styled.li`
  padding: 1.6rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 90%);

    @media screen and (min-width: 45em) {
      border-bottom: none;
    }
  }
`

const NavLink = styled.a`
  font-weight: 500;

  @media screen and (min-width: 45em) {
    color: #fff;
  }
`

export default function Hero({ isOpenOverlay, setIsOpenOverlay }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(!isOpen)
    setIsOpenOverlay(!isOpenOverlay)
  }

  return (
    <StyledHero>
      <Nav>
        <Logo src="logo.svg" alt="logo" />

        <OC
          src={`${isOpen ? "icon-close-menu.svg" : "icon-hamburger.svg"}`}
          alt={`${isOpen ? "close" : "hamburger"} icon`}
          onClick={handleOpen}
        />
        <NavList isOpen={isOpen}>
          <ListItem>
            <NavLink href="#">About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#">Discover</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#">Get Started</NavLink>
          </ListItem>
        </NavList>
      </Nav>
    </StyledHero>
  )
}
