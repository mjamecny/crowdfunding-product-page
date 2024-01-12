import styled from "styled-components"

const StyledConfirm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
`

const Checkmark = styled.img``

const Heading = styled.h3``

const Text = styled.p`
  color: var(--color-dark-gray);
  text-align: center;
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

  &:hover {
    background-color: var(--color-dark-cyan);
  }
`

export default function Confirm({ setIsOpenOverlay, setIsOpenModal }) {
  function handleSubmit() {
    setIsOpenOverlay(false)
    setIsOpenModal(false)
  }

  return (
    <StyledConfirm>
      <Checkmark src="icon-check.svg" alt="check icon" />
      <Heading>Thanks for your support!</Heading>
      <Text>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </Text>
      <Button onClick={handleSubmit}>Got it!</Button>
    </StyledConfirm>
  )
}
