import React, {useState} from 'react';
import '../styles/Eightball.css';
import Resetbutton from './Resetbutton';

const Eightball = ({answers}) => {
    const [response, setResponse] = useState( {msg: 'Think of a Question', color: 'black'} );
    const getRandomAnswer = () => setResponse( answers[ Math.floor(Math.random() * answers.length) ] );
    const reset = () => setResponse( {msg: 'Think of a Question', color: 'black'} );

    return (
        <>
        <div style={{ backgroundColor: response.color}} className='Eightball' onClick={getRandomAnswer}>
            <div className='Eightball-content'>
                <div className='Eightball-textcontent Eightball-text--white Eightball-text--size'>
                    <p>{response.msg}</p>
                </div>
            </div>
        </div>
        <Resetbutton action={reset}/>
        </>
    )
}

export default Eightball;