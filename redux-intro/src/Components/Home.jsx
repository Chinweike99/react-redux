import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const username = useSelector((state) => state.user.value.username)
  return (
    <div>This is the home {username}</div>
  )
}

export default Home