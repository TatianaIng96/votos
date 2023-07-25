import { useContext } from 'react'
import { CountVotos } from '../store/CountVotos'
import './stileButton.css'

const Button = () => {
  const store = useContext(CountVotos)
  return (
        <div>
            <div className="container">
                {store?.candidatos.map((c) => (
                    <div key={c.candidato} className="card">
                    <img src="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg" 
                    alt="Catdidato"/>
                    <p> Candidato {c.candidato}</p>
                    <button onClick={() => store.handleIncrement(c.candidato)}>Votar</button>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Button