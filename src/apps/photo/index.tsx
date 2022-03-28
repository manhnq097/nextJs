import Button from 'components/Button'
import React, { useEffect, useReducer } from 'react'
import PhotoList from './components/photo-list'
import axios from 'axios'
import reducer, { initialValue } from './reducer'

const Photo = () => {
  const [{ isLoading, isSuccess, isFail, data }, dispatch] = useReducer(
    reducer,
    initialValue
  )

  const fetchData = async () => {
    dispatch({ type: 'request' })
    try {
      const url = 'https://jsonplaceholder.typicode.com/photos?_limit=50'
      const respon = await axios.get(url)
      dispatch({ type: 'success', payload: respon.data })
    } catch (err) {
      dispatch({ type: 'fail' })
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Button label="Lấy ảnh mới" onClick={fetchData}></Button>
      {isLoading ? '...Loading' : isSuccess ? <PhotoList /> : 'Thất bại'}
    </div>
  )
}

export default Photo
