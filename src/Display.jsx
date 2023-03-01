import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';


const Display = () => {
    // const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    // const data = location.state.data;
    const data = useSelector(state=>state.myKey)
    console.log(data);
  return (
      <>
          <h1>Display Page</h1>
          <button onClick={() => navigate(-1)}>Back</button>
          {data.length==0 ? <h3>No data to show</h3> : <></>}
          {
              data.map((item,index) => {
                  return (
                      <p key={index}>{ item.name}</p>
                  )
              })
          }
        
      </>
  )
}

export default Display