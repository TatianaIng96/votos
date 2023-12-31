import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'
import './stileButton.css'
import VotosTotalC from './VotosTotalC'
import Result from './Result'
import ResultAll from './ResultAll';
import './filtro.css'

const Filtro = () => {
  const store = useContext(CountVotos)
  return (
    <div className="main">
        <div className="filtro">
            <h2>Filtrar informacion</h2>
            <div >
                <form onSubmit={store.handleSubmit} className="filter">
                    <select name="tipoTotal" onChange={store.handleChangeNum}>
                        <option value="DEFAULT" disabled> option</option>
                        <option value="DEFAULT" disabled> option</option>
                        <option value="numerico">Numerico</option>
                        <option value="porcentaje" >Porcentaje</option>
                    </select>
                    <select name="catdidatoOpcion"  onChange={store.handleChange} >
                        <option value="todos">Todos</option>
                        <option value="C1">Catdidato1</option>
                        <option value="C2">Catdidato2</option>
                        <option value="C3">Catdidato3</option>
                        <option value="C4">Catdidato4</option>
                    </select>
                    <button type="submit">Aplicar filtro</button>
                </form>
            </div>
        </div>
        <div className="second-main">
            <div className="totalvotos">
               <h2>Suma Total de votos {<VotosTotalC/>} </h2> 
            </div>
            <div className='votos'>
                {store.show  ? <ResultAll/>: <Result/>}
            </div>
        </div>
    </div>
  )
}

export default Filtro