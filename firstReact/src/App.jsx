import axios from 'axios'
import React, { useEffect, useState } from 'react'


const App = () => {  
  
  const [data, setData] = useState([])

  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
    console.log(data[0].download_url);
  }
  
  useEffect(()=>{
    getData()
  }, [])


  return (
    <div >
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <div key={idx}>
            <img src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}

      </div>
    </div>
  )
}

export default App
