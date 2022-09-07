// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  lightAndDark = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeName = isDarkMode ? 'innerBg1' : 'innerBg2'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const heading = isDarkMode ? 'heading1' : 'heading2'

    return (
      <div className="bg1">
        <div className={modeName}>
          <h1 className={heading}>Click To Change Mode</h1>
          <div>
            <button
              className="button1"
              type="button"
              onClick={this.lightAndDark}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
