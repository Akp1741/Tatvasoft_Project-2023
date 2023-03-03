import React, {Component} from 'react'
class Counter extends Component{
    constructor(props){
        super(props)
        this.stste={
            count:0
        }
    }

increment()
{
    this.setState((prevState) =>({count:prevState.count+1}))
    console.log(this.state.count)
}
incrementFive()
{
    this.increment()
}

decrement()
{
    this.setState({
        count:this.stste.count-1
    },()=>{console.log('callback value:',this.state.count)})
    console.log(this.state.count)
}
render()
{
    return(
        <div>
            <div>
                <h3>Counter</h3>{this.state.count}
            </div>
            <button onClick={() =>this.incrementFive()}>Increment</button>
            <button onClick={() =>this.decrement()}>Decrement</button>
            <div><h3>-3&4</h3></div>
        </div>
    
    )
}
}
export default Counter; 