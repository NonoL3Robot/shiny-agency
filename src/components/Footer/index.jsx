import { useTheme } from '../../utils/hooks'
import { FooterContainer, NightModeButton } from './style'

function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
