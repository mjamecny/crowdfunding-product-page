import styled from "styled-components"
import Selection from "./Selection"
import { useState } from "react"

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Heading = styled.h3``

const Close = styled.img`
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 1.6rem;
`

const Description = styled.p`
  color: var(--color-dark-gray);
  margin-top: 1.6rem;
`

const selections = [
  {
    id: 1,
    title: "Bamboo Stand",
    minPledge: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    left: 101,
    outOfStock: false,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    minPledge: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 64,
    outOfStock: false,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    minPledge: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    left: 0,
    outOfStock: true,
  },
]

export default function Selections({
  setIsOpenModal,
  setIsOpenOverlay,
  setMode,
  pledged,
  setPledged,
  setBacked,
  setTotalBackers,
}) {
  return (
    <>
      <HeadingContainer>
        <Heading>Back this project</Heading>
        <Close
          onClick={() => {
            setIsOpenModal(false)
            setIsOpenOverlay(false)
          }}
          src="icon-close-modal.svg"
          alt="close icon"
        />
      </HeadingContainer>

      <Description>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </Description>
      <Container>
        {selections.map((selection) => (
          <Selection
            key={selection.id}
            selection={selection}
            setMode={setMode}
            pledged={pledged}
            setPledged={setPledged}
            setBacked={setBacked}
            setTotalBackers={setTotalBackers}
          />
        ))}
      </Container>
    </>
  )
}
