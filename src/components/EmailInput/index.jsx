import { Component } from 'react'
import { InputWrapper, StyledLabel, StyledInput } from './style'

class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  updateInputValue(value) {
    this.setState({ inputValue: value })
  }

  render() {
    const { theme } = this.props
    return (
      <InputWrapper theme={theme}>
        <StyledLabel theme={theme}>Adresse Email</StyledLabel>
        <StyledInput
          theme={theme}
          onChange={(e) => this.updateInputValue(e.target.value)}
        />
        {this.state.inputValue}
      </InputWrapper>
    )
  }
}

export default EmailInput
