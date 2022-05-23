import { Fragment } from "react"
import {MARCAS , YEARS , PLANES} from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const {handleChangeDatos , datos , setError, error, cotizarSeguro } = useCotizador()
    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(datos).includes("")) {
            setError("Todos Los Campos Son Obligatorios")
            return
        }
        setError("")
        cotizarSeguro("")
        
    }

    

  return (
    <>
        {error && <Error/>}
        <form
            onSubmit={handleSubmit}
        >
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                <select 
                    name="marca"
                    id=""
                    className='w-full bg-white border border-gray-200'
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}
                 >
                    <option value="">---Selecciona Marca---</option>
                    {MARCAS.map(marca=>(
                        <option 
                        value={marca.id}
                        key={marca.id}>
                            {marca.nombre}
                        </option>

                    ))}



                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>AÑO</label>
                <select 
                    name="year" 
                    id="" 
                    className='w-full bg-white border border-gray-200'
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}
                    >
                    <option value="">---Selecciona Año---</option>
                    {YEARS.map(year=>(
                        <option 
                        value={year}
                        key={year}>
                            {year}
                        </option>

                    ))}



                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>Planes</label>
                <div className="flex gap-3 items-center">
                    {PLANES.map((plan=>
                        <Fragment key={plan.id}>
                            <label htmlFor="">
                                {plan.nombre}
                            </label>
                            <input 
                            type="radio" 
                            name="plan"
                            value={plan.id}
                            onChange={e => handleChangeDatos(e)}
                            />


                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit" 
                className="transition 
                duration-500 
                ease-in-out 
                
                transform 
                hover:-translate-y-2 
                hover:rotate-6 
                hover:scale-125 
                hover:bg-red-600 

                bg-blue-600 
                text-white 
                font-bold 
                py-3 px-6 
                rounded-md
                uppercase
                w-full "
                value="Cotizar" />
        </form>
    
    
    </>
  )
}

export default Formulario