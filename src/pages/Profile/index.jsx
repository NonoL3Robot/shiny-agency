import { useParams } from 'react-router'
import { useFetch, useTheme } from '../../utils/hooks/index'
import { Loader } from '../../utils/style/Atoms'
import {
  LoaderWrapper,
  ProfileWrapper,
  ProfileDetails,
  Picture,
  Title,
  JobTitle,
  Location,
  TitleWrapper,
  Price,
  SkillsWrapper,
  Skill,
  Availability,
} from './style'

function Profile() {
  const { theme } = useTheme()
  const { id: queryId } = useParams()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelance?id=${queryId}`
  )
  const freelanceData = data?.freelanceData

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <ProfileWrapper theme={theme}>
          <Picture
            src={freelanceData.picture}
            alt={freelanceData.name}
            height={150}
            width={150}
          />
          <ProfileDetails theme={theme}>
            <TitleWrapper>
              <Title>{freelanceData.name}</Title>
              <Location>{freelanceData.location}</Location>
            </TitleWrapper>
            <JobTitle>{freelanceData.job}</JobTitle>
            <SkillsWrapper>
              {freelanceData.skills &&
                freelanceData.skills.map((skill) => (
                  <Skill
                    key={`skill-${skill}-${freelanceData.id}`}
                    theme={theme}
                  >
                    {skill}
                  </Skill>
                ))}
            </SkillsWrapper>
            <Availability available={freelanceData.available}>
              {freelanceData.available
                ? 'Disponible maintenant'
                : 'Indisponible'}
            </Availability>
            <Price>{freelanceData.tjm} € / jour</Price>
          </ProfileDetails>
        </ProfileWrapper>
      )}
    </div>
  )
}

export default Profile
