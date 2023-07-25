import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'
import './stileButton.css'

const ResultAll = () => {
  const store = useContext(CountVotos)
  console.log(store.num);
  return(
    <div  className="side-catdidatos">

        {store?.candidatos.map((c) => (
            <div key={c.candidato}>
                 <p className="enabled"><span>{c.candidato}: 
                 {store.num ? c.num(store.total) :c.votos }
                </span></p>
            </div>
            
        ))}
    </div>
  )
}

export default ResultAll