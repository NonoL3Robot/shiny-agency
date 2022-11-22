import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks/index'
import {
  SurveyContainer,
  QuestionTitle,
  QuestionContent,
  ReplyWrapper,
  ReplyBox,
  LinkWrapper,
} from './style'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  const surveyData = data?.surveyData
  const { saveAnswers, answers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  if (error) {
    return <span>Oups, il y a eu un problème</span>
  }

  return (
    <SurveyContainer>
      <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
      {isLoading ? (
        <Loader theme={theme} />
      ) : (
        <QuestionContent theme={theme}>
          {surveyData && surveyData[questionNumber]}
        </QuestionContent>
      )}
      {answers && (
        <ReplyWrapper>
          <ReplyBox
            onClick={() => saveReply(true)}
            isSelected={answers[questionNumber] === true}
            theme={theme}
          >
            Oui
          </ReplyBox>
          <ReplyBox
            onClick={() => saveReply(false)}
            isSelected={answers[questionNumber] === false}
            theme={theme}
          >
            Non
          </ReplyBox>
        </ReplyWrapper>
      )}
      <LinkWrapper theme={theme}>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
