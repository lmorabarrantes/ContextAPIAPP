import { createContext, useState } from "react";
import { calcularPlan, obtenerDiferenciaYear, cacularMarca , formatearDinero} from "../helpers";


const CotizadorContext = createContext()


const CotizadorProvider = ({children})=>{

    const [datos, setDatos] = useState({
        marca:"",
        year:"",
        plan:""
    })
    console.log(datos)

    const [error, setError] = useState("")
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

    }


    const cotizarSeguro = () => {
        //base
        let resultado = 2000
        //diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        //hay que restar el 3% por cada año
        resultado -= ((diferencia * 3)*resultado)/100
        //amercano15%
        //europeo 30%
        //asiatico 5%
        resultado *= cacularMarca(datos.marca)
        
        //basico 0%
        //completo 50%
        resultado *= calcularPlan(datos.plan)
        resultado = formatearDinero(resultado)
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 1000);
        


    }   
    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                setError,
                error,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >

            {children}
        </CotizadorContext.Provider>
    )
}

export{
    CotizadorProvider
}
export default CotizadorContext