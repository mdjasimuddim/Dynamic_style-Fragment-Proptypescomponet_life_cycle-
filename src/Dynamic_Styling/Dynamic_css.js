import React, {useState, useEffect} from 'react'

const Dynamic_css = () => {
    const error = true;
    const [name, setName] = useState("");
    const [validInput, setValidInput] = useState(false);
    useEffect(() =>{
      if(name.length < 2){
        setValidInput(false);
      }else{
        setValidInput(true);
      }
    },[name])
    const handleChange = (e) => {
      setName(e.target.value);
    }
    return (
      <div>
        <input type='text' value={name} onChange={handleChange} className={`${validInput && "valid"}`}/>
      </div>
    )
}

export default Dynamic_css