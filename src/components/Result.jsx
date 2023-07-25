import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'
import './stileButton.css'

const Result = () => {
  const store = useContext(CountVotos)
  return(
    <div  className="side-catdidatos">
        <p className="enabled"><span>C1: {
        store.candidatos[0].show ? 
        store.candidatos[0].votos
        : '0'}</span></p>
        <p className="enabled"><span>C2: {
        store.candidatos[1].show ? 
        store.candidatos[1].votos
        : '0'}</span></p>
        <p className="enabled"><span>C3:  {
        store.candidatos[2].show ? 
        store.candidatos[2].votos
        : '0'}</span></p>
        <p className="enabled"><span>C4:  {
        store.candidatos[3].show ? 
        store.candidatos[3].votos
        : '0'}</span></p>
</div>
  )
}

export default Result