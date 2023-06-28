import { useState } from "react"
import { useEffect } from "react";
import Flightcard from "../components/Flightcard/Flightcard";
import './frontpage.css'
import axios from "axios";
import Spacex from "../components/Spacex/Spacex";

export default function Frontpage() {
  const [ latestLaunch, setLatestLaunch ] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    displaySpaceXData()
  }, [])

  const displaySpaceXData = async () => {
    try {
      setLoading(true)
      const res = await axios.get('https://api.spacexdata.com/v5/launches/latest')
      setLoading(false)

      setLatestLaunch(res.data)
      console.log(res.data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div id='page-container'>
      
      <input id='searchbar' type="text" placeholder="Enter keywords" />  
      {/* container */}
      <div className="container">
      
        {[1,2,3,4].map((data,index) => (
          <Flightcard key={index} data={data}/>
        ))}
      </div>
      
      <div id="details-container">
        {loading ? <div id='lazy-loader'>
          <img alt="" class="bg hb hc c" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:441/1*8NJgObmgEVhNWVt3poeTaA.gif" width="441" height="291"></img>      
        </div> : <Spacex data={latestLaunch}/>}
      </div>
    </div>
  )
}
