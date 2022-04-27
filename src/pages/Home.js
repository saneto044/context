// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import {ChangeCounter} from '../Components/ChangeCounter'
// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useContextCounter'
// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

export const Home = () => {
    //const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext()
    // 5 - context mais complexo
    const  {color, dispatch} = useTitleColorContext()
    console.log(color)
    // 6 - alterando state complexo
    const setTitleColor = (color) => {
        dispatch({type:color})
    }
    return (
        <div>
            <h1 style={{color:color}}>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
            {/* 6 - alterando contexto complexo */}
            <div>
                <button onClick={() => setTitleColor("RED")} >Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")} >Blue</button>
            </div>
        </div>
  )
}
