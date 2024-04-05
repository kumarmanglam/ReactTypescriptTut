
export type GreetInput = {
    name: string,
    id: number
}

const Greet: React.FC<GreetInput> = (props: GreetInput) => {
    return <> Welcome {props.name} with id {props.id}</>
}

export default Greet;