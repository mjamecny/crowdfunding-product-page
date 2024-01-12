import { useState } from "react"
import { Toaster } from "react-hot-toast"
import styled from "styled-components"

import Stats from "./Stats"
import Rewards from "./Rewards"
import Info from "./Info"
import Hero from "./Hero"
import Selections from "./Selections"
import Confirm from "./Confirm"

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32rem 1fr;
`

const Container = styled.div`
  background-color: hsla(0, 0%, 90%);
`

const Content = styled.div`
  padding-inline: 1.6rem;
  padding-bottom: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 72rem;
  margin: 0 auto;
  margin-top: -6.4rem;
`

const Overlay = styled.div`
  display: ${({ isOpenOverlay }) => (isOpenOverlay ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.4);
`

const Modal = styled.div`
  display: ${({ isOpenModal }) => (isOpenModal ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  max-width: 72rem;
  width: calc(100% - 3.2rem);
  padding: 2.4rem;
  z-index: 10;
  border-radius: 7px;
`

export default function App() {
  const [isOpenOverlay, setIsOpenOverlay] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [mode, setMode] = useState("selection")
  const [pledged, setPledged] = useState("Bamboo Stand")
  const [backed, setBacked] = useState(89914)
  const [totalBackers, setTotalBackers] = useState(5007)

  return (
    <StyledApp>
      <Hero setIsOpenOverlay={setIsOpenOverlay} isOpenOverlay={isOpenOverlay} />
      <Container>
        <Content>
          <Modal isOpenModal={isOpenModal}>
            {mode === "selection" && (
              <Selections
                setIsOpenModal={setIsOpenModal}
                setIsOpenOverlay={setIsOpenOverlay}
                setMode={setMode}
                pledged={pledged}
                setPledged={setPledged}
                setBacked={setBacked}
                setTotalBackers={setTotalBackers}
              />
            )}
            {mode === "confirm" && (
              <Confirm
                setIsOpenModal={setIsOpenModal}
                setIsOpenOverlay={setIsOpenOverlay}
              />
            )}
          </Modal>
          <Info
            setMode={setMode}
            setIsOpenOverlay={setIsOpenOverlay}
            setIsOpenModal={setIsOpenModal}
          />
          <Stats backed={backed} totalBackers={totalBackers} />
          <Rewards
            pledged={pledged}
            setPledged={setPledged}
            setIsOpenModal={setIsOpenModal}
            setIsOpenOverlay={setIsOpenOverlay}
          />
        </Content>
      </Container>
      <Overlay isOpenOverlay={isOpenOverlay} />
      <Toaster />
    </StyledApp>
  )
}
