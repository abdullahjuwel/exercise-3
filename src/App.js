import axios from 'axios';
import { React, useEffect, useState } from 'react';
import './App.css';
function App() {
  const [code, setCode] = useState('');
  const [countrycode, setCountrycode] = useState('');
  const [name,setName] = useState('');
  const [currency,setCurrency] = useState('');
  const [flag,setFlag] = useState('');
  const [languages,setLanguages] = useState('');
  useEffect(() =>{
    try{
      const countryData = async () =>{
        const row = await axios.post('http://localhost:5000/country/list',{code : code});
        // setName(row.data[0]);
        if(row.data[0] === undefined){
          setName('');
          setCountrycode('');
          setCurrency('');
          setFlag('');
          setLanguages('');
        }
        else{
          setName(row.data[0]['name']);
          setCountrycode(row.data[0]['code']);
          setCurrency(row.data[0]['currency']);
          setFlag(row.data[0]['flag']);
          setLanguages(row.data[0]['languages']);
        }
    }
    countryData();
    }catch(err){
      console.log(err.response.data);
    }
  },[code]);
  return (
    <div className='content'>
       <div className='left'>
         <input type='text' onChange={(e) =>setCode(e.target.value)} value={code} placeholder='Enter Country Code' />
         <div className='data'>
           <p>Name : {name}</p>
           <p>Code : {countrycode}</p>
           <p>Currency : {currency}</p>
           <p>Flag : {flag}</p>
           <p>Languages : {languages}</p>
         </div>
       </div>
       <div className='right'>
        <div className='left'>
          <input type='text' placeholder='Enter Continent Code' />
          <b>Countries</b><br/>
          <div className='data'>
            <p>Country Nmae</p>
            <p>Country Nmae</p>
            <p>Country Nmae</p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
