import {Component} from 'react'

import ReactPopup from '../ReactPopup'

import {
  MainContainer,
  ScoreCard,
  ScoreCardHeading,
  Score,
  ButtonContainer,
  ResultContainer,
  ResultItem,
  Text,
  ChoiceImage,
  Result,
  ResultStatusAndButton,
  PlayAgainButton,
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

const gameStatusConstant = {
  won: 'YOU WON',
  lost: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class Game extends Component {
  state = {
    isChoiceClicked: false,
    score: 0,
    gameStatus: gameStatusConstant.draw,
    myImageUrl: '',
    opponentImageUrl: choicesList[0].imageUrl,
  }

  updateScore = () => {
    const {gameStatus} = this.state
    if (gameStatus === gameStatusConstant.won) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (gameStatus === gameStatusConstant.lost) {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  choiceClicked = id => {
    const randomChoice = choicesList[Math.floor(Math.random() * 3)]
    const myChoice = choicesList.find(eachItem => eachItem.id === id)
    const opponentImageUrl = randomChoice.imageUrl
    this.setState({myImageUrl: myChoice.imageUrl, opponentImageUrl})
    this.setState(prevState => ({isChoiceClicked: !prevState.isChoiceClicked}))
    if (
      (id === 'ROCK' && randomChoice.id === 'SCISSORS') ||
      (id === 'SCISSORS' && randomChoice.id === 'PAPER') ||
      (id === 'PAPER' && randomChoice.id === 'ROCK')
    ) {
      this.setState({gameStatus: 'YOU WON'}, this.updateScore)
    } else if (randomChoice.id === id) {
      this.setState({gameStatus: 'IT IS DRAW'}, this.updateScore)
    } else {
      this.setState({gameStatus: 'YOU LOSE'}, this.updateScore)
    }
  }

  playAgain = () => {
    this.setState({isChoiceClicked: false})
  }

  render() {
    const {
      score,
      isChoiceClicked,
      myImageUrl,
      opponentImageUrl,
      gameStatus,
    } = this.state
    return (
      <MainContainer>
        <ScoreCard>
          <ScoreCardHeading>
            ROCK <br />
            PAPER
            <br />
            SCISSORS
          </ScoreCardHeading>
          <Score>
            Score <br />
            {score}
          </Score>
        </ScoreCard>
        {!isChoiceClicked && (
          <ButtonContainer>
            {choicesList.map(eachItem => (
              <ChoiceItem
                choiceDetails={eachItem}
                key={eachItem.id}
                choiceClicked={this.choiceClicked}
              />
            ))}
          </ButtonContainer>
        )}
        {isChoiceClicked && (
          <div>
            <ResultContainer>
              <ResultItem>
                <Text>You</Text>
                <ChoiceImage src={myImageUrl} alt="your choice" />
              </ResultItem>
              <ResultItem>
                <Text>OPPONENT</Text>
                <ChoiceImage src={opponentImageUrl} alt="opponent choice" />
              </ResultItem>
            </ResultContainer>
            <ResultStatusAndButton>
              <Result>{gameStatus}</Result>
              <PlayAgainButton type="button" onClick={this.playAgain}>
                PLAY AGAIN
              </PlayAgainButton>
            </ResultStatusAndButton>
          </div>
        )}
        <ReactPopup />
        <ScoreCardHeading> by Saloni Chandra </ScoreCardHeading>
      </MainContainer>
    )
  }
}

export default Game
