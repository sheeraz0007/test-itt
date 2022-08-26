import { createContext } from "react";
import B from "./b";
const namee = createContext();
const name = createContext();
const A = () => {
    return (
        <div>
            <namee.Provider value="haider">
                <name.Provider value="sultan">
                    <B name="sheeraz" />
                </name.Provider>
            </namee.Provider>

        </div>
    );
}

export default A;
export { namee,name }