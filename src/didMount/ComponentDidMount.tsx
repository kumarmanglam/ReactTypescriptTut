import { Component } from "react";
type State = {name: string};
class ComponentDidMount extends Component<{}, State>{
    constructor(props:{}){
        super(props);
        this.state={name: "React"}
    }
    componentDidMount(): void {
        setTimeout(()=> {
            this.setState({name: "changed"})
        },1000)
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>, snapshot?: any): void {
        console.log(this.state.name);
    }
    render(){
        return <>{this.state.name}</>
    }
}