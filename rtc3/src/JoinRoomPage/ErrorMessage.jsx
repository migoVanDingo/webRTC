import React from 'react'
import styled from 'styled-components'

const SErrorMessage = styled.p`
    font-size: 0.8rem;
    color: red;
    align-self:start;

`

const ErrorMessage = ({ errorMessage }) => {
  return (
    <SErrorMessage>**{errorMessage}</SErrorMessage>
  )
}

export default ErrorMessage