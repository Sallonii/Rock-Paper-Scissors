import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  RulesButton,
  PopupContainer,
  RulesPopup,
  CloseButton,
  RulesImage,
} from './styledComponents'

const ReactPopUp = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <RulesPopup>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesPopup>
      )}
    </Popup>
  </PopupContainer>
)
export default ReactPopUp
