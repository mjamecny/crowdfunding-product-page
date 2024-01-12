import { useState } from "react"
import toast from "react-hot-toast"
import styled from "styled-components"

const StyledPledgeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-top: 1px solid hsla(0, 0%, 80%);
  margin-top: 2.4rem;
  padding-top: 2.4rem;

  @media screen and (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-column: 1/-1;
  }
`

const Heading = styled.h3`
  text-align: center;
  color: var(--color-dark-gray);
  font-weight: 400;
  font-size: 1.6rem;
`

const InputContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`

const Input = styled.input`
  border-radius: 100px;
  width: 100%;
  border: 1px solid hsla(0, 0%, 80%);
  outline: none;
  padding: 1.6rem 3.6rem;
  font-weight: 700;

  &:focus {
    border: 1px solid var(--color-moderate-cyan);
  }

  @media screen and (min-width: 45em) {
    width: auto;
  }
`

const InputBox = styled.div`
  position: relative;
`

const DollarIcon = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2.4rem;
  color: var(--color-dark-gray);
  font-weight: 700;
`

const Button = styled.button`
  border: none;
  border-radius: 100px;
  background-color: var(--color-moderate-cyan);
  padding: 1.6rem 2.4rem;
  font-weight: 700;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-dark-cyan);
  }
`

export default function PledgeForm({
  setMode,
  minPledge,
  setBacked,
  setTotalBackers,
}) {
  const [pledge, setPledge] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!pledge) {
      toast.error("Please enter a pledge")
      return
    }

    if (Number(pledge) <= minPledge) {
      toast.error(`Minimum pledge is ${minPledge}$`)
      return
    }

    setMode("confirm")
    setBacked((prev) => prev + Number(pledge))
    setTotalBackers((prev) => prev + 1)
    setPledge("")
  }

  return (
    <StyledPledgeForm onSubmit={handleSubmit}>
      <Heading>Enter your pledge</Heading>
      <InputContainer>
        <InputBox>
          <Input
            type="text"
            value={pledge}
            onChange={(e) => setPledge(e.target.value)}
          />
          <DollarIcon>$</DollarIcon>
        </InputBox>
        <Button>Continue</Button>
      </InputContainer>
    </StyledPledgeForm>
  )
}
