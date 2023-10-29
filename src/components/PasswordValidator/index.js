// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  ValidatorCard,
  Heading,
  Description,
  CustomInput,
  ValidatorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [isValid, setIsValid] = useState(false)
  const [password, setPassword] = useState('')

  const onPasswordChange = event => {
    setPassword(event.target.value)
    if (password.length >= 7) {
      return setIsValid(true)
    }
    return setIsValid(false)
  }

  return (
    <AppContainer>
      <ValidatorCard>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <CustomInput
          type="password"
          onChange={onPasswordChange}
          value={password}
        />
        {!isValid && (
          <ValidatorText>
            Your password must be at least 8 characters
          </ValidatorText>
        )}
      </ValidatorCard>
    </AppContainer>
  )
}

export default PasswordValidator
