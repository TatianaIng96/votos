import { useState, createContext } from "react";


export const CountVotos = createContext();

// eslint-disable-next-line react/prop-types
export const CountProvider = ({ children }) => {
  const [candidatos, setCandidatos] = useState([
    {  
        candidato: 'C1',
        votos: 0,
        show: false,
        num: false
    },
    {  
        candidato: 'C2',
        votos: 0,
        show: false,
        num: false
    },
    {  
        candidato: 'C3',
        votos: 0,
        show: false,
        num: false
    },
    {  
        candidato: 'C4',
        votos: 0,
        show: false,
        num: false
    },
    ]);
  const [show,setShow]= useState(false)

  const handleIncrement = (data) => {
        setCandidatos(candidatos.map((c)=>
        c.candidato === data ? {...c, votos: c.votos + 1} : c
       ))
  }

  const handleSubmit= (event) =>{
     event.preventDefault();
  }
  const handleChange = (event) => {
    const value = event.target.value; 
    if(value === "todos"){
      setCandidatos(candidatos.map((c,index)=>
      c.candidato === c.candidato[index] ? {...c, show: true} : c
      ))
      setShow(true)
    } else {
      setCandidatos(candidatos.map((c)=>
      c.candidato === value ? {...c, show: true} : c
     ))// Actualizar el estado con el valor seleccionado
    }
    console.log(candidatos);
  };

  const handleChangeNum = (event) => {
    const value = event.target.value; 
    if(value==='numerico'){
      setCandidatos(candidatos.map((c)=>
        c.candidato === value ? {...c, num: true} : c
      ))// Actualizar el estado con el valor seleccionado
    }
  }
  return (
    <CountVotos.Provider
      value={{
        candidatos,
        handleIncrement,
        handleChange,
        show,
        handleChangeNum,handleSubmit
      }}
    >
      {children}
    </CountVotos.Provider>
  )
}