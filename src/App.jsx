import React, { useState } from 'react';

function App() {

  const [bgColor, setBgColor] = useState('black');

    const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    
    <div
    style={{ 
      height:'100vh',
      backgroundColor:bgColor, 
      justifyContent: 'center', 
      alignItems: 'center', 
      display:'flex',
      flexDirection: 'revert',
      gap: '10px',
    
    }}
  
  >

      &nbsp;<h1  className='abc' style={{justifyContent:'center',
content:'normal',
color:'white',

      }}>Color changer </h1>
      &nbsp;
      &nbsp;
      &nbsp;
      <button 
        onClick={() => changeColor('lightblue')} 
        style={{buttonStyle,
        backgroundColor:'lightblue',
        color:'black',
        padding:'2%',
        borderRadius:'40px',
    
        }}
        
      >
        Light blue
      </button>


      <button 
        onClick={() => changeColor('grey')} 
        style={{buttonStyle,
          backgroundColor:'grey',
          color:'white',
          padding:'2%',
          border:'5%',
          borderRadius:'40px',
    
        }}
      >
        Grey
      </button>


      <button 
        onClick={() => changeColor('white')} 
        style={{buttonStyle,
        backgroundColor:'white',
        color:'black',
        padding:'2%',
        borderRadius:'40px',
        }}
      >
        White
      </button>


      <button className='am'
        onClick={() => changeColor('darksalmon')} 
        style={{buttonStyle,
        backgroundColor:'darksalmon',
        color:'white',
      padding:'2%',
      fontFamily:'sans-serif',

      borderRadius:'40px',
    
        }}
      >
        DarkSalmon
      </button>
    
      
    </div>
  );
}

// Button styling
const buttonStyle ={
  padding: '15px 30px',
  fontSize: '18px',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontStyle:"italic",
};

export default App;