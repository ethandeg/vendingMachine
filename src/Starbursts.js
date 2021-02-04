import {Link} from "react-router-dom"
const Starbursts = () => {
    return (
        <>
        <h1 className="skittlesh1">Starbursts</h1>
        <div className ="skittles">
            <img src = 'http://cdn.shopify.com/s/files/1/0004/8132/9204/products/starburst-original-pkg_1024x1024.jpg?v=1522356053'></img>
        </div>
        <div className="snack-selector">
            <p><Link to="/">Go Back</Link></p>
        </div>
        </>
    )
}
export default Starbursts