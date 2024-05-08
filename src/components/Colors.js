import { useState } from "react"

function Colors(){
    const [state, setState] = useState('green')
    function handleColorChange(color) {
      setState(color)
    }
    return (
        <>
        {state}

        <div style={{ display: 'flex' }}>
          <div style={{ background: 'red', padding: '2rem' }}>
            <button onClick={() => handleColorChange('red')}>red</button>
          </div>
          <div style={{ background: 'blue', padding: '2rem' }}>
            <button onClick={() => handleColorChange('blue')}>blue</button>
          </div>
          <div style={{ background: 'yellow', padding: '2rem' }}>
  
            <button onClick={() => handleColorChange('yellow')}>yellow</button></div>
          <div style={{ background: 'green', padding: '2rem' }}>
  
            <button onClick={() => handleColorChange('green')}>green</button>
          </div>
        </div>
  
        <div style={{ background: state, padding: '2rem' }}>
        </div>\
        </>
    )
}

export default Colors;