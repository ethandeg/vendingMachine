import {Link} from "react-router-dom"
const Hersheys = () => {
    return (
        <>
        <h1 className="skittlesh1">Heryshey's</h1>
        <div className ="skittles">
            <img src = 'https://i5.walmartimages.com/asr/6ad31aeb-c650-44c2-b546-47f0529a2531_2.89d4b82dd3a15b4b693c429c76d6a75e.png'></img>
        </div>
        <div className="snack-selector">
            <p><Link to="/">Go Back</Link></p>
        </div>
        </>
    )
}
export default Hersheys