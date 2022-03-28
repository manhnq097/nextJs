import React, { useEffect, useReducer } from 'react'
import Styled from './index.style'
import { initialValue } from 'context'
import reducer from 'reducer'

const Filter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let url = 'https://en.wikipedia.org/w/api.php'
    url = url + '?origin=*'
    Object.keys(state?.params).forEach(function (key) {
      url += '&' + key + '=' + state?.params[key]
    })

    const respon = await fetch(url)
    const json = await respon.json()
    const query = json.query.search
  }

  const handleChange = (data: any) => {
    dispatch({ type: 'CHANGE', payload: data })
  }

  return (
    <Styled.FilterWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Styled.FilterInput
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          value={state?.params.srsearch}
        />
        <Styled.FilterSubmit>Tìm kiếm</Styled.FilterSubmit>
      </form>
    </Styled.FilterWrapper>
  )
}

export default Filter
