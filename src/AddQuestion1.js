import React, { useState } from 'react';

function AddQuestion() {
  const [surveyName, setSurveyName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [questions, setQuestions] = useState([]);

  function addQuestion() {
    const newQuestionText = document.getElementById("questionText").value.trim();
    const newQuestionType = document.getElementById("questionType").value;

    if (newQuestionText && newQuestionType) {
      setQuestions(prevQuestions => [...prevQuestions, { text: newQuestionText, type: newQuestionType }]);
    }
  }

  function removeQuestion(index) {
    setQuestions(prevQuestions => prevQuestions.filter((_, i) => i !== index));
  }

  function handleSurveyNameChange(event) {
    setSurveyName(event.target.value);
  }

  function handleParticipantNameChange(event) {
    setParticipantName(event.target.value);
  }

  function createQuestionElement(question, index) {
    return (
      <div key={index}>
        <p>{question.text} - {question.type}</p>
        <button type="button" onClick={() => removeQuestion(index)}>Remove</button>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor="surveyName">Survey Name:</label>
      <input type="text" id="surveyName" value={surveyName} onChange={handleSurveyNameChange} />

      <label htmlFor="participantName">Participant Name:</label>
      <input type="text" id="participantName" value={participantName} onChange={handleParticipantNameChange} />

      <label htmlFor="questionText">Enter a question:</label>
      <input type="text" id="questionText" name="questionText" />
      <select id="questionType">
        <option value="yesno">Yes/No</option>
        <option value="scale">Scale</option>
        <option value="checkbox">Checkboxes</option>
        <option value="openresponse">Open Response</option>
      </select>
      <button type="button" onClick={addQuestion}>Add Question</button>

      {/* Render dynamic questions here */}
      <div id="dynamicQuestions">
        {questions.map((question, index) => (
          createQuestionElement(question, index)
        ))}
      </div>

      <button type="button">Print</button>
    </div>
  );
}

export default AddQuestion;




/*import React, {useState } from 'react';

function
SurveyApp()
 {
   const [surveyName,setSurveyName]=useState('');
   const [participantName,setParticipantName]=useState('');
   const [questions,setQuestions]=useState([]);


   function addQuestion()
{
    const newQuestionText = document.getElementById("questionText").value.trim();
    const newQuestionType = document.getElementById("questionType").value;

    if (newQuestionText && newQuestionType)
 {  setQuestions(prevQuestions => [...prevQuestions,
    {  text: newQuestionText,
       type: newQuestionType }]);
        }
}


   
function
removeQuestion(index)
 {
    setQuestions(prevQuestions => prevQuestions.filter((_,i) => i !== index));
    }

function
handleSurveyNameChange(event)
 {
    setSurveyName(event.target.value);
    }




function
handleParticipantNameChange(event)
 {
    setParticipantName(event.target.value);
    }

   
function
createQuestionElement(question, index)
 {
    return
(
    <div
    key={index}> <p>{question.text} - {question.type}</p>
    <button
        type="button"
        onClick={() => removeQuestion(index)}>Remove</button>
    </div>
       
    );
}


   
return
(
        <div>
            <label
htmlFor="surveyName">Survey
 Name:</label>
            <input
type="text"
id="surveyName"
value={surveyName}
onChange={handleSurveyNameChange}
 />


            <label
htmlFor="participantName">Participant
 Name:</label>
            <input
type="text"
id="participantName"
value={participantName}
onChange={handleParticipantNameChange}
 />



            <label
htmlFor="questionText">Enter
 a question:</label>
            <input
type="text"
id="questionText"
name="questionText"
 />
            <select
id="questionType">
                <option
value="yesno">Yes/No</option>
                <option
value="scale">Scale</option>
                <option
value="checkbox">Checkboxes</option>
                <option
value="openresponse">Open
 Response</option>

</select>
            <button
type="button"
onClick={addQuestion}>Add
 Question</button>


            {/*
 Render dynamic questions here }
            <div
id="dynamicQuestions">
                {questions.map((question,
index)
=>
(
                   
createQuestionElement(question,
index)
               

))}
            </div>


            <button
type="button">Print</button>
        </div>
   
);
}


export
default
SurveyApp; */