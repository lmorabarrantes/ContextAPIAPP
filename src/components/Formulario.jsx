import {MARCAS , YEARS , PLANES} from "../constants"

const Formulario = () => {
  return (
    <>
        <form>
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                <select name="marca" id="" className='w-full bg-white border border-gray-200'>
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
                <select name="marca" id="" className='w-full bg-white border border-gray-200'>
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
                <select name="marca" id="" className='w-full bg-white border border-gray-200'>
                    <option value="">---Selecciona Plan---</option>
                    {PLANES.map(planes=>(
                        <option 
                        value={planes.id}
                        key={planes.id}>
                            {planes.nombre}
                        </option>

                    ))}



                </select>
            </div>
        </form>
    
    
    </>
  )
}

export default Formulario