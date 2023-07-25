import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'
import './stileButton.css'

const ResultAll = () => {
  const store = useContext(CountVotos)
  return(
    <div  className="side-catdidatos">

        {store?.candidatos.map((c) => (
            <div key={c.candidato}>
                 <p className="enabled"><span>C1: {
                    c.votos}
                </span></p>
            </div>
        ))}
    </div>
  )
}

export default ResultAll