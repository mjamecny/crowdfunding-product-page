import styled from "styled-components"
import Reward from "./Reward"

const StyledRewards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background-color: #fff;
  border: 1px solid hsla(0, 0%, 80%);
  border-radius: 7px;
  padding-inline: 2.4rem;
  padding-block: 3.2rem;
`

const Heading = styled.h2``

const Text = styled.p`
  color: var(--color-dark-gray);
`

const rewards = [
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

export default function Rewards({
  setPledged,
  pledged,
  setIsOpenOverlay,
  setIsOpenModal,
}) {
  return (
    <StyledRewards>
      <Heading>About this project</Heading>
      <Text>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. <br />
        <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </Text>
      {rewards.map((reward) => (
        <Reward
          key={reward.id}
          reward={reward}
          setPledged={setPledged}
          setIsOpenModal={setIsOpenModal}
          setIsOpenOverlay={setIsOpenOverlay}
        />
      ))}
    </StyledRewards>
  )
}
