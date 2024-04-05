import { useState } from "react";
import C from "./C";


const P = () => {
    const [data, setData] = useState("prev");
    function handleChange(val:any){
        setData(val);
    }
    return <><C data={data} handleData={(val:any) => handleChange(val)}/>
    {data}
    </> 
}

export default P;