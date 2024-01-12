import styled from "styled-components"
import PledgeForm from "./PledgeForm"

const StyledSelection = styled.div`
  border: ${({ pledged }) =>
    pledged
      ? "2px solid var(--color-moderate-cyan)"
      : "1px solid hsla(0, 0%, 80%)"};
  ${({ outOfStock }) => outOfStock && "opacity: 0.5"};
  border-radius: 7px;
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 45em) {
    grid-template-columns: 1fr auto;
  }
`

const HeaderBox = styled.div`
  display: flex;
  gap: 2.4rem;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1.6rem;
  }
`

const Heading = styled.h3`
  font-size: 1.6rem;
  color: var(--color-black);
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--color-moderate-cyan);
  }

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

  @media screen and (min-width: 45em) {
    margin-top: 0;
    grid-column: 1 / -1;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;

    grid-column: 2 / 3;
    grid-row: 1 / 2;
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
    font-size: 2rem;
  }

  @media screen and (min-width: 45em) {
    margin-top: 0;
  }
`

const RadioContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    /* Show the indicator (dot/circle) when checked */
    &:checked ~ span:after {
      display: block;
    }

    &:disabled ~ span {
      cursor: not-allowed;
    }
  }

  & span:after {
    top: 6px;
    left: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-moderate-cyan);
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid #eee;
    border-radius: 50%;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
`

export default function Selection({
  selection,
  setMode,
  pledged,
  setPledged,
  setBacked,
  setTotalBackers,
}) {
  const { title, description, minPledge, left, outOfStock } = selection

  const handleChange = (e) => {
    setPledged(e.target.value)
  }

  return (
    <StyledSelection outOfStock={outOfStock} pledged={pledged === title}>
      <HeaderBox>
        <RadioContainer>
          <input
            type="radio"
            name="pledge"
            value={title}
            checked={pledged === title}
            onChange={handleChange}
            disabled={outOfStock}
          />
          <span></span>
        </RadioContainer>
        <HeadingContainer>
          <Heading>{title}</Heading>
          <Pledge>Pledge ${minPledge} or more</Pledge>
        </HeadingContainer>
      </HeaderBox>
      <Description>{description}</Description>
      <ButtonContainer>
        <Left>
          <span>{left}</span> left
        </Left>
      </ButtonContainer>
      {pledged === title && (
        <PledgeForm
          minPledge={minPledge}
          setMode={setMode}
          setBacked={setBacked}
          setTotalBackers={setTotalBackers}
        />
      )}
    </StyledSelection>
  )
}
