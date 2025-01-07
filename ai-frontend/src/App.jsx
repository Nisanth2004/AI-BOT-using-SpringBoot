import { useState } from 'react'

import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'

function App() {
  const [response, setResponse] = useState(null)
  const[loading,setLoading]=useState(false)
  const handleQuestionSubmit=async(question)=>{
    setLoading(true);
    setResponse(null);
    try{

    }catch(error)
    {
      alert("Failed to get Response")
    }
    finally{
      setLoading(false)
    }

  }

  return (
    <div className='App'>
      <header className='bg-primary text-white text-center'>
        <h1>Nisanth's ChatBot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit}/>
      <ChatResponse/>

      
    </div>
  )
}

export default App
