import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'
import './stileButton.css'

const Result = () => {
  const store = useContext(CountVotos)
  return(
    <div  className="side-catdidatos">
      {store.candidatos.map((candidato, index) => 
        (
          <p className="enabled" key={index}><span>{
            candidato.show ? 
            ` ${candidato.candidato}: ${
              store.num ? candidato.num(store.total) 
              : candidato.votos}` 
            : ''}</span></p>
      ))}
</div>
  )
}

export default Result