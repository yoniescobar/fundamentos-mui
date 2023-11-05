import Botones from "./components/Botones";
import Cards from "./components/Cards";



export default function App() {
  return (
    <>
    <Botones />
    <hr />
    <div className="centrarElementos">
      <Cards />
      <Cards />
      <Cards />
    </div>
    </>
  )
}
