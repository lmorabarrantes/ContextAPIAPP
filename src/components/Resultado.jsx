import { useCallback, useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {
    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos

    const yearRef = useRef(year)
    
    const [nombreMarca] = useCallback(
        MARCAS.filter(m => m.id === Number(marca)),
        [resultado] 
        
        )
    const [nombrePlan] = useCallback(
        PLANES.filter(p => p.id === Number(plan)),
        [resultado])

    console.log(nombreMarca)
    if (resultado === 0) {
        return null
    }



  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow-md">
        <h2 className="text-gray-500 font-bold text-xl uppercase">Resumen</h2>
        <p className="my-2">
            <span className="font-bold text-xl">Marca: </span>
            {nombreMarca.nombre}
        </p>
        <p className="my-2">
            <span className="font-bold text-xl">Plan: </span>
            {nombrePlan.nombre}
        </p>
        <p className="my-2">
            <span className="font-bold text-xl">Año: </span>
            {yearRef.current}
        </p>
        <p className="my-2 text-2xl">
            <span className="font-bold ">Monto a Cancelar: </span>
            {resultado}
        </p>



    </div>
  )
}

export default Resultado