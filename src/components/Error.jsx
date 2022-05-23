import useCotizador from "../hooks/useCotizador"
const Error = () => {
    const {error} = useCotizador()
  return (
    <div>
        <p className=" border border-red-600 bg-red-200 rounded-sm p-3 text-red-700 font-bold text-center uppercase"> {error} </p>
    </div>
  )
}

export default Error