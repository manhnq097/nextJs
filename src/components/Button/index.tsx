import React from 'react'
import Styled from './index.style'

interface Props {
  label: string
  title?: string
}

const Button = ({ label, title, ...rest }: Props) => {
  return (
    <Styled.Button title={title || label} {...rest}>
      {label}
    </Styled.Button>
  )
}

export default Button
