import React, { useState } from 'react';

function OpenResponseQuestions() {
    const [responses, setResponses] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setResponses(prevResponses => ({
            ...prevResponses,
            [name]: value
        }));
    }
    

    return (
        <div>
            <h1>Hello World</h1>
            {Object.keys(responses).map((question, index) => (
                <input
                    key={index}
                    type="text"
                    name={`openResponseQuestions[${index}]`}
                    value={responses[question] || ''}
                    onChange={handleChange}
                />
            ))}
        </div>
    );
}
//added
export default OpenResponseQuestions;
