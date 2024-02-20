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

import React, { useState } from 'react';

function SurveyApp() {
    const [surveyName, setSurveyName] = useState('');
    const [participantName, setParticipantName] = useState('');
    const [questions, setQuestions] = useState([]);

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

    function handleSurveyNameChange(event) {
        setSurveyName(event.target.value);
    }

    function handleParticipantNameChange(event) {
        setParticipantName(event.target.value);
    }

    // You need to implement createQuestionElement and other functions for dynamic questions

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

            {/* Render dynamic questions here */}
            <div id="dynamicQuestions">
                {questions.map((question, index) => (
                    // You need to call createQuestionElement to render each dynamic question
                    <div key={index}>
                        {/* createQuestionElement(question, index) */}
                    </div>
                ))}
            </div>

            <button type="button">Print</button>
        </div>
    );
}

export default SurveyApp;
