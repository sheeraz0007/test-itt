import D from "./d";
import { name } from "./a";
import { useContext } from "react";
const C = (props) => {
    const secondname = useContext(name);
    return (
        <div>
            {secondname}
            <D name={props.name} />
        </div>
    );
}

export default C;