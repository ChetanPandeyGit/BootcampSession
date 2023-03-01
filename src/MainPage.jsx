// import React, { useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteData } from './redux/slice'

const MainPage = () => {
    const dispatch = useDispatch()
    // const data =useSelector(state=> state.myKey)
//     const [data, setData] = useState([]);
    const navigate = useNavigate();
    const handleFetch = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>dispatch(fetchData(res.data)))
    }
    const handleDelete = () => {
        dispatch(deleteData())
    }
    const handleDisplay = () => {
        navigate('/display')
    }
    
  return (
      <>
          <h1>Main Page</h1>
          <button onClick={handleFetch}>Fetch</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleDisplay}>Display</button>
      </>
  )
}

export default MainPage