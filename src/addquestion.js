import React, { useState } from 'react';

function AddQuestion() {

    const newQuestion = document.getElementById("questionText").value.trim();
    const questionType = document.getElementById("questionType").value;
   
    if (newQuestion && questionType) 
    {
        questions.push({ question: newQuestion, type: questionType });
        updateDynamicQuestions();
    }
}
/*

    /*
        const newQuestion = document.getElementById("questionText").value.trim();
        const questionType = document.getElementById("questionType").value;
    
        if (newQuestion && questionType) {
            setQuestions(prevQuestions => [...prevQuestions, { question: newQuestion, type: questionType }]);
        }
    
    





    const [questions, setQuestions] = useState([]);
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
            setQuestions(prevQuestions => [...prevQuestions, { question: newQuestion, type: questionType }]);
            setNewQuestion('');
            setQuestionType('');
        } else {
            console.log('New question and question type are required.');
        }
    };

    return (
        <div>
            <input type="text" id="questionText" value={newQuestion} onChange={handleQuestionChange} />
            <select id="questionType" value={questionType} onChange={handleQuestionTypeChange}>
                <option value="yesno">Yes/No</option>
                <option value="scale">Scale</option>
                <option value="checkbox">Checkboxes</option>
                <option value="openresponse">Open Response</option>
            </select>
            <button type="button" onClick={addQuestion}>Add Question</button>
        </div>
    );
}
*/
export default AddQuestion;
