import React, { useState } from 'react'
import './App.css';
import ColorBlock from './components/ColorBlock';

function App(){
    let colors = [
        'violet', 'blue', 
        'lightblue', 'green', 
        'greenyellow', 'yellow', 
        'orange', 'red'
      ]

    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    return (
        <div className="App">
            {colors.map((color, i) => 
                <ColorBlock key={i} color={color} />
            )}
        </div>
    )
}

export default App;