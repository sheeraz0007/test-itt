import { useState } from "react";
const Table = () => {
    const [state, setstate] = useState({ a: 0, name: "value++" })
    let b = 1;
    const calit = () => {
        b++;
        console.log(b);
    }

    const callit = () => {
        setstate(prevState => {
            return {...prevState, a: prevState.a + 1 }
        });

    }

    return (<div className="Table">
        <table align="center" border="12px solid black">
            <tr>
                <th>thejk</th>
                <td>kldjlkf</td>
                <td>dfjdjk</td>
            </tr>
            <tr>
                <th>kldsjflk</th>
                <td>lkfkld</td>
                <td>ljflkf</td>
            </tr>

        </table>
        <div>
            <p>{state.name}</p>

            <p>{b}</p>

            <button onClick={calit}>Variable.</button>
            <p>{state.a}</p>

            <button onClick={callit}>UseState.</button>
        </div>
    </div>);
}

export default Table;