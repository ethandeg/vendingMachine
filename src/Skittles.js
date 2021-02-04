import "./Skittles.css"
import {Link} from "react-router-dom"
const Skittles = () => {
    return (
        <>
        <h1 className="skittlesh1">Skittles</h1>
        <div className ="skittles">
            <img src = 'https://www.meijer.com/content/dam/meijer/product/0004/00/0000/16/0004000000160_3_A1C1_1200.png'></img>
        </div>
        <div className="snack-selector">
            <p><Link to="/">Go Back</Link></p>
        </div>
        </>
    )
}
export default Skittles