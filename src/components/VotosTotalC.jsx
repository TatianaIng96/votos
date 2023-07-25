import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'

const VotosTotalC = () => {
  const store = useContext(CountVotos)
  const sumaTotal = store?.candidatos.reduce((acc, candidato) => {
    return acc + candidato.votos;
  }, 0); 
  return (
    <>
        {sumaTotal}
    </>
  )
}

export default VotosTotalC