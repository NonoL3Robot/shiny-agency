import { InputWrapper, StyledLabel, StyledInput } from './style'

function EmailInput({ theme }) {
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

export default EmailInput
