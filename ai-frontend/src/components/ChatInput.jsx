import React, { useState } from 'react'

const ChatInput = ({onSubmit}) => {

    const[question,setquestion]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(question.trim()){
            onSubmit(question);
            setquestion("");
        }

    }
  return (
    <div className='container my-4'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="question">Ask a Question</label>
                <input
                type="text"
                className='form-control'
                id="question"
                placeholder='Enter the Prompt here'
                value={question}
                onChange={(e)=>setquestion(e.target.value)}
                />
            </div>

            <button type='submit' className='btn btn-primary mt-2'>Submit</button>

        </form>
      
    </div>
  )
}

export default ChatInput
