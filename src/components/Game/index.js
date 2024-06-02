import {Component} from 'react'

import ReactPopup from '../ReactPopup'

import {
  MainContainer,
  ScoreCard,
  Score,
  ButtonContainer,
} from './styledComponents'

import ChoiceItem from '../ChoiceItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {isChoiceClicked: false, score: 0}

  choiceClicked = id => {
    const randomChoice = choicesList[Math.floor(Math.random() * 3)]
  }

  render() {
    const {score} = this.state
    return (
      <MainContainer>
        <ScoreCard>
          <h1>
            ROCK <br />
            PAPER
            <br />
            SCISSORS
          </h1>
          <Score>
            Score <br />
            {score}
          </Score>
        </ScoreCard>
        <ButtonContainer>
          {choicesList.map(eachItem => (
            <ChoiceItem
              choiceDetails={eachItem}
              key={eachItem.id}
              choiceClicked={this.choiceClicked}
            />
          ))}
        </ButtonContainer>
        <ReactPopup />
      </MainContainer>
    )
  }
}

export default Game
