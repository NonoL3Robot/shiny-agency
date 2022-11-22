import EmptyIllustration from '../../assets/empty.svg'
import { Container, Title, Illustration, SubTitle } from './style'

function EmptyList({ theme }) {
  return (
    <Container theme={theme}>
      <Title theme={theme}>Dommage...</Title>
      <Illustration src={EmptyIllustration} />
      <SubTitle theme={theme}>
        Il semblerait que vous n’ayez besoin d’aucune compétence
      </SubTitle>
    </Container>
  )
}

export default EmptyList
