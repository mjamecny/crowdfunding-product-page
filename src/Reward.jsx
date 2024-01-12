import styled from "styled-components"

const StyledReward = styled.div`
  border: 1px solid hsla(0, 0%, 80%);
  ${({ outOfStock }) => outOfStock && "opacity: 0.5;"}
  border-radius: 7px;
  padding: 2.4rem;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Heading = styled.h3`
  font-size: 1.6rem;
  color: var(--color-black);

  ${({ outOfStock }) => outOfStock && "opacity: 0.5;"}
`

const Pledge = styled.p`
  font-weight: 500;
  color: var(--color-moderate-cyan);

  ${({ outOfStock }) => outOfStock && "opacity: 0.5;"}
`

const Description = styled.p`
  margin-top: 2.4rem;
  color: var(--color-dark-gray);

  ${({ outOfStock }) => outOfStock && "opacity: 0.5;"}
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Left = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2.4rem;
  color: var(--color-dark-gray);
  ${({ outOfStock }) => outOfStock && "opacity: 0.5;"}

  span {
    color: var(--color-black);
    font-weight: 700;
    font-size: 3rem;
  }
`

const Button = styled.button`
  align-self: flex-start;
  border: none;
  border-radius: 100px;
  background-color: ${({ outOfStock }) =>
    !outOfStock ? "var(--color-moderate-cyan)" : "var(--color-dark-gray)"};
  ${({ outOfStock }) => outOfStock && "opacity: 0.5; cursor: not-allowed;"}

  color: #fff;
  padding: 1.6rem 2.4rem;
  flex: 1;
  font-weight: 700;
  margin-top: 2.4rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-dark-cyan);
  }

  @media screen and (min-width: 45em) {
    flex: unset;
  }
`

export default function Reward({
  reward,
  setPledged,
  setIsOpenOverlay,
  setIsOpenModal,
}) {
  const { title, description, minPledge, left, outOfStock } = reward

  return (
    <StyledReward outOfStock={outOfStock}>
      <HeadingContainer>
        <Heading>{title}</Heading>
        <Pledge>Pledge ${minPledge} or more</Pledge>
      </HeadingContainer>

      <Description>{description}</Description>
      <ButtonContainer>
        <Left>
          <span>{left}</span> left
        </Left>
        <Button
          outOfStock={outOfStock}
          onClick={() => {
            setPledged(title)
            setIsOpenOverlay(true)
            setIsOpenModal(true)
          }}
        >
          {!outOfStock ? "Select Reward" : "Out of Stock"}
        </Button>
      </ButtonContainer>
    </StyledReward>
  )
}
