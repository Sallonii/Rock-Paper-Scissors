import {ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, choiceClicked} = props
  const {id, imageUrl} = choiceDetails

  const onClickingChoice = () => {
    choiceClicked(id)
  }
  return (
    <ChoiceButton onClick={onClickingChoice}>
      <ChoiceImage src={imageUrl} alt={id} />
    </ChoiceButton>
  )
}

export default ChoiceItem
