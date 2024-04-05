import { useState } from "react"
import { obtype } from "./Demo";


//subject
//gender

const StudentForm = ({studentData} : {studentData : obtype}) => {
    function handleSubmit(e:any){
        e.preventDefault();
        console.log(studentData);
    }
    // const [data, setData] = useState(studentData);
    return (<form onSubmit={(e) => handleSubmit(e)}>
        {/* <input placeholder="Name" type="text" name="name" value={data.name} onChange={(e) => setData({...data,  name: e.currentTarget.value})}/>
        <input placeholder="age" type="number"  name="age" value={data.age}  onChange={(e) => setData({...data,  age: Number.parseInt( e.currentTarget.value)})}/>
        <input placeholder="marks" type="number"  name="marks" value={data.marks}  onChange={(e) =>setData({...data,  marks: Number.parseInt(e.currentTarget.value)})}/> */}
        <button>Submit</button>
    </form>)
}

export default StudentForm;