


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
/*
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { FormControl, InputLabel } from '@mui/material';
import OpenResponseQuestions from './openResponse';
import AddQuestion from './AddQuestion1';
//import AddQuestion from './addquestion';

function SurveyApp() {
    const [surveyName, setSurveyName] = useState('');
    const [participantName, setParticipantName] = useState('');
    const [questions, setQuestions] = useState([]);

    const handleSurveyNameChange = (event) => {
      setSurveyName(event.target.value);
    };

  const handleParticipantNameChange = (event) => {
      setParticipantName(event.target.value);
  };



    function addQuestion() {
        /*return (
            <div>
                <h1>Add question</h1>
                <AddQuestion />
            </div>
        );*/
        
        /*
        const newQuestion = document.getElementById("questionText").value.trim();
        const questionType = document.getElementById("questionType").value;

        if (newQuestion && questionType) {
            setQuestions(prevQuestions => [...prevQuestions, { question: newQuestion, type: questionType }]);
        }
        /*const [questions, setQuestions] = useState([]);
        const [newQuestion, setNewQuestion] = useState('');
        const [questionType, setQuestionType] = useState('');
    
        const handleQuestionChange = (event) => {
            setNewQuestion(event.target.value.trim());
        };
    
        const handleQuestionTypeChange = (event) => {
            setQuestionType(event.target.value);
        };
    
        const addQuestion = () => {
            if (newQuestion && questionType) {
                setQuestions([...questions, { question: newQuestion, type: questionType }]);
                setNewQuestion('');
                setQuestionType('');
            }
        };*//*
    }

    function removeQuestion() {
        setQuestions(prevQuestions => prevQuestions.slice(0, -1));
    }

    /*function handleSurveyNameChange(event) {
        setSurveyName(event.target.value);
    }*/

    /*function handleParticipantNameChange(event) {
        setParticipantName(event.target.value);
    }*/

    // You need to implement createQuestionElement and other functions for dynamic questions
/*
    return (
      <div>
          <FormControl size='large'>
              <InputLabel htmlFor="surveyName"></InputLabel>
              <TextField id="surveyName" value={surveyName} onChange={handleSurveyNameChange} placeholder='Survey Name:'/>
          </FormControl>

          <FormControl size='large'>
            <InputLabel htmlFor="participantName"></InputLabel>
            <TextField id="participantName" value={participantName} onChange={handleParticipantNameChange} placeholder='Participant Name:' sx={{textAlign:'left'}}/>
          </FormControl>

          <FormControl fullWidth>
              <InputLabel htmlFor="questionText"></InputLabel>
              <TextField id="questionText" name="questionText" placeholder='Enter a question:' />
          </FormControl>

          <FormControl fullWidth>
              <InputLabel id="questionTypeLabel">Question Type:</InputLabel>
              <Select labelId="questionTypeLabel" id="questionType">
                  <MenuItem value="yesno">Yes/No</MenuItem>
                  <MenuItem value="scale">Scale</MenuItem>
                  <MenuItem value="checkbox">Checkboxes</MenuItem>
                  <MenuItem value="openresponse">Open Response</MenuItem>
              </Select>
          </FormControl>

          <Button variant="contained" onClick={addQuestion}>Add Question</Button>
          <Button variant="contained" onClick={removeQuestion}>Remove Question</Button>

          {/* Render dynamic questions here *//*}
          <div id="dynamicQuestions">
              {questions.map((question, index) => (
                  // You need to call createQuestionElement to render each dynamic question
                  <div key={index}>
                      {/* createQuestionElement(question, index) *//*}
                      <OpenResponseQuestions />
                  </div>
              ))}
          </div>

          <Button variant="contained">Print</Button>
      </div>
  );
}


    /*
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
            <button type="button" onClick={removeQuestion}>Remove Question</button>

            {/* Render dynamic questions here }
            <div id="dynamicQuestions">
                {questions.map((question, index) => (
                    // You need to call createQuestionElement to render each dynamic question
                    <div key={index}>
                        {/* createQuestionElement(question, index) }
                        {/*Openresponse added, calling the other file hopefully}
                        <OpenResponseQuestions />
                    </div>
                ))}
            </div>

            <button type="button">Print</button>
        </div>
    );
                }*//*


export default SurveyApp;*/


/*import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import OpenResponseQuestions from './openResponse';

function SurveyApp() {
  const [surveyName, setSurveyName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSurveyNameChange = (event) => {
    setSurveyName(event.target.value);
  };

  const handleParticipantNameChange = (event) => {
    setParticipantName(event.target.value);
  };

  function addQuestion() {
    const newQuestion = document.getElementById("questionText").value.trim();
    const questionType = document.getElementById("questionType").value;

    if (newQuestion && questionType) {
      setQuestions(prevQuestions => [...prevQuestions, { question: newQuestion, type: questionType }]);
    }
  }

  function removeQuestion() {
    setQuestions(prevQuestions => prevQuestions.slice(0, -1));
  }

  return (
    <div>
      <FormControl size='large'>
        <InputLabel htmlFor="surveyName">Survey Name:</InputLabel>
        <TextField id="surveyName" value={surveyName} onChange={handleSurveyNameChange} />
      </FormControl>

      <FormControl size='large'>
        <InputLabel htmlFor="participantName">Participant Name:</InputLabel>
        <TextField id="participantName" value={participantName} onChange={handleParticipantNameChange} />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="questionText">Enter a question:</InputLabel>
        <TextField id="questionText" name="questionText" />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="questionTypeLabel">Question Type:</InputLabel>
        <Select labelId="questionTypeLabel" id="questionType">
          <MenuItem value="yesno">Yes/No</MenuItem>
          <MenuItem value="scale">Scale</MenuItem>
          <MenuItem value="checkbox">Checkboxes</MenuItem>
          <MenuItem value="openresponse">Open Response</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={addQuestion}>Add Question</Button>
      <Button variant="contained" onClick={removeQuestion}>Remove Question</Button>

      {/* Render dynamic questions here /}
      <div id="dynamicQuestions">
        {questions.map((question, index) => (
          <div key={index}>
            {/* You need to implement createQuestionElement /}
            {/* createQuestionElement(question, index) /}
            <OpenResponseQuestions />
          </div>
        ))}
      </div>

      <Button variant="contained">Print</Button>
    </div>
  );
}

export default SurveyApp;
*/




















/*
import React, {useState } from 'react';


function
SurveyApp()
 {
   const [surveyName, setSurveyName] = useState('');
   const [participantName, setParticipantName] = useState('');
   const [questions, setQuestions] = useState([]);
  
    function addQuestion()
      {
        const newQuestionText = document.getElementById("questionText").value.trim();
        const newQuestionType = document.getElementById("questionType").value;
        
          if (newQuestionText && newQuestionType)
            {
              setQuestions(prevQuestions => [...prevQuestions,
            { 
              text: newQuestionText,
              type: newQuestionType 
            }
          ]);
        }
      }
      
      
    function removeQuestion(index)
    {    
      setQuestions(prevQuestions => prevQuestions.filter((_,i) =>i!==index));
    }

    function handleSurveyNameChange(event)
    {      
    setSurveyName(event.target.value);
    }

    function handleParticipantNameChange(event)
    {
       setParticipantName(event.target.value);
    }

   
    function createQuestionElement(question, index)
    {
      return (
        <div key={index}>
           <p>{question.text}  - {question.type}</p>
           <button type="button" onClick={() => removeQuestion(index)}>Remove</button>
        </div>
      );
    //}

      return
        (
          <div>
            <label htmlFor="surveyName">Survey Name:</label>
            <input type="text" id="surveyName" value={surveyName} onChange={handleSurveyNameChange} />
            <label htmlFor="participantName">Participant Name:</label>
            <input type="text" id="participantName" value={participantName} onChange={handleParticipantNameChange}  />
            <label htmlFor="questionText">Enter a question:</label>
            <input type="text" id="questionText" name="questionText" />
            <select id="questionType">
               <option value="yesno">Yes/No</option>
               <option value="scale">Scale</option>
               <option value="checkbox">Checkboxes</option>
               <option value="openresponse">Open Response</option>
            </select>
            <button type="button" onClick={addQuestion}>Add Question</button>
            {/* Render dynamic questions here /}
              <div id="dynamicQuestions">
                  {questions.map((question, index) => (createQuestionElement(question, index)))}
            </div>
              <button type="button">Print</button>
            </div>
          );
    
        }
      }
export default SurveyApp;
*/