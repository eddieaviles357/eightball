import React, {useState} from 'react';
import '../styles/Eightball.css';

const Eightball = ({answers}) => {
    const [response, setResponse] = useState({msg: 'Think of a Question', color: 'black'});
    const getRandomAnswer = () => setResponse(answers[ Math.floor(Math.random() * answers.length) ]);

    return (
        <div style={{ backgroundColor: response.color}} className='Eightball' onClick={getRandomAnswer}>
            <div className='Eightball-content'>
                <div className='Eightball-textcontent Eightball-text--white Eightball-text--size'>
                    <p>{response.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default Eightball;