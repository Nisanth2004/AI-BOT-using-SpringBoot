import React from 'react'

const ChatResponse = ({response}) => {
    if(!response)
    {
        return null;
    }

    const[candidates,usageMetadata]=response;
  return (
    <div className='container my-4'>
      <h1>Response</h1>
      {candidates.map((candidate,index)=>(
        <div class="card mb-3" key={index}>
       
        <div class="card-body">
          <h5 class="card-title">Candidate  {index+1}</h5>
          <p class="card-text">{candidate.content.parts[0].text}</p>
         
        </div>
      </div>
      ))}
    </div>
  )
}

export default ChatResponse
