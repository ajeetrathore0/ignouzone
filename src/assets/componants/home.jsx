
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import search from '../icons/search.png'


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChartExample = () => {
    let width=400;
    let height=200;
 
    if(window.innerWidth<500){
        
        width=window.innerWidth;
        height=window.innerHeight/2
    }
  // Sample data
  const data = [
    { name: 'January', pv: 2400, amt: 2400 },
    { name: 'February', pv: 1398, amt: 2210 },
    { name: 'March', pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', pv: 4800, amt: 2181 },
    { name: 'June', pv: 3800, amt: 2500 },
    { name: 'July', pv: 4300, amt: 2100 },
  ];

  return (
    <div>
      <h3 style={{color:'white',margin:'10px'}}>Visitors by Months</h3>
      <LineChart width={width} height={height} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="1 2"  />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};




export const Searchbar = () => {

    return (
        <>
            <section id='admin'>
                <div className="searchbar">
                   <h1 style={{fontSize:'25px', textAlign:'center',width:'100%',color:"blue"}}>ADMIN PANEL</h1>
                </div>
            </section>
        </>
    )
}

const Home = () => {
    useEffect(() => {
        document.title = "Home || Ignou tech"
    }, [])

    return (
        <>
        <LineChartExample />

        </>
    )
}
export default Home;
