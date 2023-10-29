// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
`
export const ValidatorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #475569;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 400px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
`
export const CustomInput = styled.input`
  height: 35px;
  width: 400px;
`
export const ValidatorText = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
`
