import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { CardWrapper, CardLabel, CardImage, CardTitle } from './style'
import { Component } from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { theme, picture, label, title } = this.props

    return (
      <CardWrapper theme={theme}>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>{title}</CardTitle>
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
  theme: 'light',
}

export default Card
