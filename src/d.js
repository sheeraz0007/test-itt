import { useContext } from "react";
import { namee } from "./a";

const D = (props) => {
    const firstname = useContext(namee)
    return (
        <div>{firstname}</div>
    );
}

export default D;