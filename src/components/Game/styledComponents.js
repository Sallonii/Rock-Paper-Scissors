import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  border-style: solid;
  border-color: white;
  border-radius: 5px;
`

export const Score = styled.div`
  background-color: white;
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
