import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'

function Results() {
  const { answers } = useContext(SurveyContext)
  if (Object.keys(answers).length !== 0) {
    console.log(answers)
  }

  return (
    <div>
      <h1>Results</h1>
    </div>
  )
}

export default Results
