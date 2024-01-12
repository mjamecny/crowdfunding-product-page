import styled from "styled-components"

const StyledModal = styled.div`
  display: ${({ isOpenModal }) => (isOpenModal ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: calc(100% - 3.2rem);
  max-width: 72rem;
  padding: 2.4rem 2.4rem;
  z-index: 10;
  border-radius: 7px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`

export default function Modal({ children }) {
  return (
    <StyledModal>
      <Container>{children}</Container>
    </StyledModal>
  )
}
