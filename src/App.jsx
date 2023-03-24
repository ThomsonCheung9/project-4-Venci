import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Dog from './Components/Dog';

function App() {
  
  const [dogImage, setDogImage] = useState(null)
  const [dogName, setDogName] = useState(null)
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);



  const fetchDogSite = async () => {
    const response = await axios.get("https://api.thedogapi.com/v1/images/search", {
      headers: {
        'Content-Type' : 'application/json',
        'x-api-key' : 'live_4WIIjD0sgN9cb0tp6X1fCWLiy9kwYcwCy4or4LDPkzM4FZdcvIhzs9CoDeM7qLdV'
      }
    })
    console.log(response.data[0])
    setDogImage(response.data[0].url);
    setDogName(response.data[0].breeds[0].name);
  }


  useEffect(() => {
    fetchDogSite();
  }, [])
  /*
  const handleClick = async () => {
    try {
      const data = await (await axios.get('https://api.thedogapi.com/v1/images/search', {
        headers: {
          'Content-Type' : 'application/json',
          'x-api-key' : 'live_4WIIjD0sgN9cb0tp6X1fCWLiy9kwYcwCy4or4LDPkzM4FZdcvIhzs9CoDeM7qLdV'
        },
      }));

      console.log('data is: ', JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      console.log(err.message)
    }
  }

  function checkResponse(data) {
    if (data) {
      console.log(data)
      return <div>{data.data[0].id}</div>
    } else {
      return null;
    }
  }

 */

  
  return (
    <div className="App">
    <div>
      <Dog image={dogImage} name={dogName}></Dog>
    </div>
    </div>
  )
}

export default App
