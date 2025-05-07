import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';


function App() {

  const[quote,setQuote] = useState('')

  const fetchQuote = async ()=> {

   const response =  await fetch('https://dummyjson.com/quotes');
   const data =  await response.json();

   const randomNumberIndex = Math.floor(Math.random()*data.quotes.length) ;

   const randomQuote = data.quotes[randomNumberIndex].quote ;

   setQuote(randomQuote);
   
  }


  useEffect(()=>{
    fetchQuote();
  },[])


  return (
    <>

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        
        <div className="text-center w-75">
          <div>
          <h3 className='my-5 text-decoration-underline'>Quote Genarator REACT</h3>

          </div>
          <button className='btn btn-warning my-3' onClick={()=> fetchQuote()}>CLICK ME FOR QOUTE</button>
          <div className="bg-success p-4 rounded">
            <p className="text-white">"{quote}"</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
