// import { studentType } from "../App";

import { useState } from "react";

const C = ({ data, handleData }: { data: string, handleData: any }) => {
    const [formdata, setFormData] = useState<string>();
    function handleSubmit(e: any) {
        e.preventDefault();
        handleData(formdata);
    }
    return (<div>
        {data}
        <form onSubmit={handleSubmit}>
            <input type="text" value={formdata} onChange={(e) => setFormData(e.target.value)} />
            <button>submit</button>
        </form>
        {/* <button onClick={() => handleData("changed data")}>change</button> */}
    </div>)
}

export default C;