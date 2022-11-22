import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

export const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

export const Illustration = styled.img`
  margin: 30px 0;
`

export const SubTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: normal;
`
