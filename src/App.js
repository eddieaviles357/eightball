import React from 'react';
import Eightball from './components/Eightball';
import ANSWERS from './answers';

const App = () => {
    return (
        <>   
            <Eightball answers={ANSWERS}/>
            <Resetbutton />
        </>
    )
}


export default App;