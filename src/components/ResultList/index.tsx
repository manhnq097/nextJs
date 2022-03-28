import Loading from 'components/Loading'
import React from 'react'
import Styled from './index.style'

const ResultList = () => {
  const loading = true
  const data = [1, 2, 3]
  return (
    <div>
      {loading ? (
        <Styled.ResultLoading>
          <Loading />
        </Styled.ResultLoading>
      ) : (
        <Styled.ResultList>
          {data.map((e, i) => (
            <li key={i}>e</li>
          ))}
        </Styled.ResultList>
      )}
    </div>
  )
}

export default ResultList
