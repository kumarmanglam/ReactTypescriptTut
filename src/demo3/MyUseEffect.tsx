import { useEffect, useState } from "react"


const MyUseEffect = () => {
    const [count, setCount] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);

    //useEffect(callback, dependency) 
    // [] --> component did mount --> runs the first time when component is rendered
    //    --> (empty)  --> didupdate() --> runs everytime when component rerenders 
    // [a, b, c] --> shouldUpdate() -->  runs when the dependency changes 
    useEffect(()=> {
        console.log("Use Effect ran")
    },[count])
    return <>UI {count} <button onClick={()=> setCount((prev) => prev+1)}>Button1</button> {count2}`<button onClick={()=> setCount2((prev) => prev+1)}>Button2</button></>
}

export default MyUseEffect;