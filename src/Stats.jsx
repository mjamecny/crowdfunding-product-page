import styled from "styled-components"

const StyledStats = styled.div`
  background-color: #fff;
  border: 1px solid hsla(0, 0%, 80%);
  border-radius: 7px;
  padding-inline: 2.4rem;
  padding-block: 3.2rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (min-width: 45em) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Number = styled.p`
  font-size: 3.6rem;
  font-weight: 700;
`

const SubText = styled.p`
  color: var(--color-dark-gray);
`

const Line = styled.div`
  height: 2px;
  width: 40%;
  background-color: hsl(0, 0%, 90%);
  margin-top: 2.4rem;

  @media screen and (min-width: 45em) {
    display: none;
  }
`

const Progress = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  height: 10px;

  border-radius: 100px;

  &::-webkit-progress-bar {
    background-color: hsl(0, 0%, 90%);
    border-radius: 100px;
  }

  &::-webkit-progress-value {
    background-color: var(--color-moderate-cyan);
    border-radius: 100px;
  }
`

export default function Stats({ backed, totalBackers }) {
  return (
    <StyledStats>
      <Container>
        <Stat>
          <Number>${backed}</Number>
          <SubText>of $100,000 backed</SubText>
          <Line></Line>
        </Stat>
        <Stat>
          <Number>{totalBackers}</Number>
          <SubText>total backers</SubText>
          <Line></Line>
        </Stat>
        <Stat>
          <Number>56</Number>
          <SubText>days left</SubText>
        </Stat>
      </Container>

      <Progress id="file" value={`${backed}`} max="100000"></Progress>
    </StyledStats>
  )
}
