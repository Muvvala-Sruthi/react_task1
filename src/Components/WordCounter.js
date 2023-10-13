import React, { useState } from 'react';
function WordCounter(){
  const [inputText, setInputText] = useState('');
  const [wordlength,setWordlength]=useState(0)
  const handleInputChange =(e)=> {       
    const countWords = (text) => {
      const words = text.trim().split(/\s+/);
      return words.filter(word => word !== '').length;
    };  
    setInputText(e.target.value)
    const data=e.target.value  
    const wordCount = countWords(inputText);  
      setWordlength(wordCount)    
    console.log(data)        
  }
  return(
    <div>
      <h1>Responsive Paragraph Word Counter</h1>
 <textarea value={inputText} onChange={(e)=>handleInputChange(e)} rows="4" columns="30"/>
 <h2>Word count:{wordlength}</h2>
    </div>
  )
}
export default WordCounter;


