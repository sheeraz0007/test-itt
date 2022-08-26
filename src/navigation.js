import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="hom">
            <div className="Navigation">
                <Link to="/seePic"> see picture</Link>
                <Link to="/table">See table</Link>
            </div>
            <h1>home page.</h1>
        </div>
    );
}

export default Navigation;