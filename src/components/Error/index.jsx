import { useTheme } from '../../utils/hooks'
import ErrorIllustration from '../../assets/404.svg'
import { ErrorWrapper, ErrorTitle, Illustration, ErrorSubtitle } from './style'

function Error() {
  const { theme } = useTheme()

  return (
    <ErrorWrapper theme={theme}>
      <ErrorTitle theme={theme}>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} />
      <ErrorSubtitle theme={theme}>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
