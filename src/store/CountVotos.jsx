import { useState, createContext } from "react";
import VotosTotalC from "../components/VotosTotalC";


export const CountVotos = createContext();

// eslint-disable-next-line react/prop-types
export const CountProvider = ({ children }) => {
  const [show,setShow]= useState(false)
  const [value,setValue] = useState('')
  const [valor,setValor] = useState('')
  const [total,setTotal] = useState(0)
  const [num,setNum] = useState(false)
  const [candidatos, setCandidatos] = useState([
    {  
        candidato: 'C1',
        votos: 0,
        show: true,
        num: function (total) {
          if(this.votos !== 0 && total !== 0){
            const parse = (this.votos*100)/total;
            return parseInt(parse).toFixed(2)+"%"
          }

          return '0%'
        }
    },
    {  
        candidato: 'C2',
        votos: 0,
        show: true,
        num:  function (total) {
          if(this.votos!== 0 && total !== 0){
          const parse = (this.votos*100)/total;
          return parseInt(parse).toFixed(2)+"%"
          }
          return "0%"
        }
    },
    {  
        candidato: 'C3',
        votos: 0,
        show: true,
        num:  function (total) {
          if(this.votos!== 0 && total !== 0){
            const parse = (this.votos*100)/total;
            return parseInt(parse).toFixed(2)+"%"
          }else{
            
            return "0%"
          }
        }
    },
    {  
        candidato: 'C4',
        votos: 0,
        show: true,
        num:  function (total) {
          if(this.votos!== 0 && total !== 0){
          const parse = (this.votos*100)/total;
          return parseInt(parse).toFixed(2)+"%"
          }
          return "0%"
        }
    },
    ]);

   

   
  const handleIncrement = (data) => {
        setCandidatos(candidatos.map((c)=>
        c.candidato === data ? {...c, votos: c.votos + 1} : c
       ))
  }

  const handleSubmit= (event) =>{
     event.preventDefault();
     if(value === "todos"){
      setCandidatos(candidatos.map((c,index)=>
      c.candidato === c.candidato[index] ? {...c, show: true} : c
      ))
      setShow(true)
    } else {
      setCandidatos(candidatos.map((c)=>
      c.candidato !== value ? {...c, show: false} : {...c, show: true} 
     ))// Actualizar el estado con el valor seleccionado
    }
    console.log(valor);
    if(valor==='porcentaje'){
      setNum(true)
    }else{
      setNum(false)
    }
     
  }
  const handleChange = (event) => {
    setValue(event.target.value)
  };

  const handleChangeNum = (event) => {
    const value = event.target.value; 
    setValor(value)
  }
  return (
    <CountVotos.Provider
      value={{
        candidatos,
        handleIncrement,
        handleChange,
        show,
        handleChangeNum,
        handleSubmit,
        setTotal,
        total,
        num
      }}
    >
      {children}
    </CountVotos.Provider>
  )
}