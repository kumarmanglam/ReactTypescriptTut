import React, { useState } from 'react';
import Display from './Display';

export interface studentType {
  name: string,
  age: number,
  marks: number,
}
export interface obtype{
    student: studentType,
}

function Demo() {
  const student: studentType = {
    name: "", 
    age: 0,
    marks: 0
  }
  const [data, setData] = useState(student);
  return (
    <div className="App">
      {/* <StudentForm  studentData ={data}  /> */}
      <Display studentform={data} />
    </div>
  );
}

export default Demo;
