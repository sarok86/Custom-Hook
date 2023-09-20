import React, { useState } from 'react';

// import Login from './components/Login';
// import Landing from './components/Landing';


import useLocalStorage from './hooks/useLocalStorage'; 

const App = () => {

    // const [toggle , setToggle] = useState(true);

    const [name , SetName] = useLocalStorage("name","")

    return (
        <div>
            {/* <button onClick={() => setToggle(!toggle) }>Toggle</button>
            {toggle ? <Landing /> : <Login/>} */}

            <input type='text' value={
                name} onChange={event => SetName(event.target.value)}/>
        </div>
    );
};

export default App;