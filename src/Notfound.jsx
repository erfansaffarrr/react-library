
import { Link } from "react-router-dom"
const Notfound = () => {
  return (
    <div >
        <div className="Notfound">
        <img src="./src/assets/404.png" alt="" />
        </div>
        <div className="Notfound2">
        <Link to="/"> برگشت به صفحه اصلی</Link>
        </div>
    </div>
  )
}

export default Notfound