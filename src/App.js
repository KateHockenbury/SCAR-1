import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

function SurveyApp() {
  const [surveyName, setSurveyName] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newQuestionType, setNewQuestionType] = useState('');
  const printSection = () => {
    const printableSection1 = document.getElementById('printable-section1');
    const printableSection2 = document.getElementById('printable-section2');
    if (printableSection1 && printableSection2) {
      // Hide remove buttons before printing
      const removeButtons = document.querySelectorAll('.remove-button');
      removeButtons.forEach(button => button.style.display = 'none');
  
      const originalBody = document.body.innerHTML;
      const sectionToPrint1 = printableSection1.innerHTML;
      const sectionToPrint2 = printableSection2.innerHTML;
      document.body.innerHTML = sectionToPrint1 + sectionToPrint2;
      window.print();
      document.body.innerHTML = originalBody;
  
      // Show remove buttons after printing
      removeButtons.forEach(button => button.style.display = 'inline-block');
    }
  };

    function addQuestion(newQuestionText, newQuestionType) {
      if (newQuestionText && newQuestionType) {
        setQuestions(prevQuestions => [...prevQuestions, { text: newQuestionText, type: newQuestionType }]);
        setNewQuestionText(''); // Clear the question text box
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
      const questionNumber = index + 1;
      return (
        <Box key={index} sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <p>{questionNumber}. {question.text} - {question.type}</p>
          <Button className="remove-button" variant="contained" onClick={() => removeQuestion(index)}>Remove Question</Button>
        </Box>
      );
    }
    
    
    return (
        <div>
            <Box sx={{ border: '10px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <div id="printable-section1">
            <TextField label="Survey Name" value={surveyName} onChange={handleSurveyNameChange} sx={{ padding: '10px', marginTop: '10px', width: '600px' }}/>
            <p>Participant Name:________________________________________</p>
            {/*<TextField label="Participant Name" value={participantName} onChange={handleParticipantNameChange} sx={{ padding: '10px', marginTop: '10px', width: '600px' }}/>*/}
            </div>
            <TextField label="Type in a Question" id="questionText" name="questionText" value={newQuestionText} onChange={(event) => setNewQuestionText(event.target.value)} sx={{ padding: '10px', marginTop: '10px', marginRight: '10px', width: '600px' }}/>
            <FormControl sx={{ marginTop: '20px', width: '300px' }}>
            <InputLabel id="questionTypeLabel">Select the Question Type</InputLabel>
              <Select
                labelId="questionTypeLabel"
                id="questionType"
                value={newQuestionType}
                onChange={(event) => setNewQuestionType(event.target.value)}>
                <MenuItem value="yesno">Yes/No</MenuItem>
                <MenuItem value="scale">Scale</MenuItem>
                <MenuItem value="checkbox">Checkboxes</MenuItem>
                <MenuItem value="openresponse">Open Response</MenuItem>
              </Select>
            </FormControl>

            <Button
              sx={{ marginTop: '30px', marginLeft: '20px', width: '200px' }}
              variant="contained"
              onClick={() => addQuestion(newQuestionText.trim(), newQuestionType)}>
              Add Question
            </Button>
            
            {/* Render dynamic questions here */}
            <div id="printable-section2">
              <div id="dynamicQuestions">
                  {questions.map((question, index) => createQuestionElement(question, index))}
              
              </div>
            </div>
            <Button variant="contained" onClick={printSection}>Print Survey</Button>
            </Box>
        </div>
        
    );
}

export default SurveyApp;
