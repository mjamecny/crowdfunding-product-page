import { useState } from "react"
import styled from "styled-components"

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background-color: #fff;
  border: 1px solid hsla(0, 0%, 80%);
  border-radius: 7px;
  padding-inline: 2.4rem;
  padding-top: 6.4rem;
  padding-bottom: 3.2rem;
  position: relative;
`

const Heading = styled.h1`
  line-height: 1.2;
  font-size: 2.4rem;
  text-align: center;
`

const Text = styled.p`
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media screen and (min-width: 45em) {
    justify-content: space-between;
  }
`

const Button = styled.button`
  border: none;
  border-radius: 100px;
  background-color: var(--color-moderate-cyan);
  padding: 1.6rem 2.4rem;
  flex: 1;
  font-weight: 700;
  color: #fff;
  transition: background-color 0.3s;

  @media screen and (min-width: 45em) {
    flex: unset;
  }

  &:hover {
    background-color: var(--color-dark-cyan);
  }
`

const BookmarkButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  width: 56px;
  height: 56px;

  @media screen and (min-width: 45em) {
    width: 180px;
  }
`

const BookmarkIcon = styled.svg`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`

const BookmarkText = styled.p`
  display: none;
  border: none;
  border-radius: 100px;
  padding-block: 2.81rem;
  padding-left: 6.4rem;
  padding-right: 1.6rem;
  background-color: hsl(0, 0%, 90%);
  font-weight: 700;
  color: ${({ bookmarked }) =>
    bookmarked ? "var(--color-moderate-cyan)" : "var(--color-dark-gray)"};

  @media screen and (min-width: 45em) {
    display: block;
  }
`

const Logo = styled.img`
  width: 64px;
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
`

export default function Info({ setMode, setIsOpenOverlay, setIsOpenModal }) {
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <StyledInfo>
      <Heading>Mastercraft Bamboo Monitor Riser</Heading>
      <Text>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Text>
      <ButtonContainer>
        <Button
          onClick={() => {
            setMode("selection")
            setIsOpenModal(true)
            setIsOpenOverlay(true)
          }}
        >
          Back this project
        </Button>
        <BookmarkButton onClick={() => setBookmarked(!bookmarked)}>
          <BookmarkIcon
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle
                fill={`${
                  bookmarked ? "var(--color-moderate-cyan)" : "#2F2F2F"
                }`}
                cx="28"
                cy="28"
                r="28"
              />
              <path
                fill={`${bookmarked ? "#fff" : "#B1B1B1"}`}
                d="M23 19v18l5-5.058L33 37V19z"
              />
            </g>
          </BookmarkIcon>
          <BookmarkText bookmarked={bookmarked}>
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </BookmarkText>
        </BookmarkButton>
      </ButtonContainer>
      <Logo src="logo-mastercraft.svg" alt="logo" />
    </StyledInfo>
  )
}
