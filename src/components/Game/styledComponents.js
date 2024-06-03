import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ScoreCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-style: solid;
  border-color: white;
  border-radius: 5px;
  padding: 10px;
  @media screen and (min-width: 767px) {
    width: 60%;
  }
`

export const ScoreCardHeading = styled.h1`
  color: white;
`

export const Score = styled.p`
  background-color: white;
  font-family: 'Roboto';
  padding: 30px;
  text-align: center;
  color: #223a5f;
  font-weight: 700;
  font-size: 20px;
  border-radius: 20px;
`
export const ButtonContainer = styled.ul`
  padding: 0;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const RulesButton = styled.button`
  align-self: flex-end;
  margin-right: 30px;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChoiceImage = styled.img`
  height: 180px;
`

export const ResultItem = styled.div``

export const Text = styled.h1`
  text-align: center;
  font-size: 20px;
  color: white;
`
export const Result = styled.p`
  color: white;
`
export const ResultStatusAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainButton = styled.button`
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`
