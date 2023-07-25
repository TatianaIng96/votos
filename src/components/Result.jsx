import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'
import './stileButton.css'

const Result = () => {
  const store = useContext(CountVotos)
  return(
    <div  className="side-catdidatos">
        <p className="enabled"><span>{
        store.candidatos[0].show ? 
        `C1: ${
          store.num ? store.candidatos[0].num(store.total) 
          : store.candidatos[0].votos}` 
        : ''}</span></p>
        <p className="enabled"><span> {
        store.candidatos[1].show ? 
        `C2: ${
          store.num ? store.candidatos[1].num(store.total) : store.candidatos[1].votos}` 
        : ''}</span></p>
        <p className="enabled"><span> {
        store.candidatos[2].show ? 
        `C3: ${
          store.num ? store.candidatos[2].num(store.total) : store.candidatos[2].votos}` 
        : ''}</span></p>
        <p className="enabled"><span> {
        store.candidatos[3].show ? 
        `C4: ${
          store.num ? store.candidatos[3].num(store.total) : store.candidatos[3].votos}` 
        : ''}</span></p>
</div>
  )
}

export default Result