import React, { useState } from 'react';

// list file having all questions
import data from './data';

// component for fetching and rendering all data
import SingleQuestion from './Question';
 
function App() {
  
  const [questions,setQuestions]=useState(data)
  console.log(questions)
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {
            questions.map((question)=>{


              //here ...question means that wehave already passed question.id and now pass all rest of the property like title,info as its is.
              return <SingleQuestion key={question.id}{...question}/>
            })
          }

        </section>
      </div>
    </main>
  )
}

export default App;
