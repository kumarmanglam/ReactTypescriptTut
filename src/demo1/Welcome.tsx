import { Component } from "react";
import { GreetInput } from "./Greet";

class Welcome extends Component<GreetInput> {
    constructor(props: GreetInput){
        super(props);
        this.state = { // props
            count :0,
        }
    }
    static defaultProps = {
        name: "unknown",
        id:3,
    }
    render(){
        let {name, id} = this.props;
        return <>{name} {id}</>
    }
}