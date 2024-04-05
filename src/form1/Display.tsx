interface Student  {
    studentform: {
        name: string,
        age: number,
        marks: number,
    }
}

const Display: React.FC<Student>  = ({studentform}: Student) => {
    // const {name, age, marks} = props;
    return <div>
        <p>Name : {studentform.name} </p>
        <p>Age : {studentform.age}</p>
        <p>Marks : {studentform.marks}</p>
    </div>
}

export default Display;