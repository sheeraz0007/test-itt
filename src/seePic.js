import { useEffect, useState } from 'react';
import gr from './kl.jpg';
const SeePic = () => {
    const [content, setcontent] = useState('');
    const [count, setcount] = useState(0);
    const [data, setdata] = useState([]);
    useEffect(() => {
        console.log("hgjfghjfghfj");
    }, [])
    // useEffect(()=>{
    //     console.log("update!")
    // })
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/' + content)
            .then(response => response.json())
            .then(json => setdata(json))
        
        return () => {
            console.log("unMount");
        }
    }, [content])


    return (
        <div className="SeePic">
            <img src={gr} alt="not found item." height="200px" width="200px" />
            <div>
                <button onClick={() => setcount(count + 1)}>{"count " + count}</button>
                <button onClick={() => setcontent("posts")}>post</button>
                <button onClick={() => setcontent("users")}>user</button>
                <button onClick={() => setcontent("comments")}>comments</button>
                <h1>{content}</h1>
                <ul>
                    {data && data.map(date=>{
                      return  <li key={date.id}>{date.id}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SeePic;