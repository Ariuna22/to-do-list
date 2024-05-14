import { Component } from "react";
import four from './four.png';

export class ToDoList extends Component {
 state= {
   userInput:"",
   todolist:[]
 }
 onChangeEvent(e){
    this.setState({userInput:e})
     }

  addItem(input){
    if (input ===""){
        alert("Please enter an item")
    } else {
    let listArray = this.state.todolist;
    listArray.push(input);
    this.setState({todolist: listArray, userInput:""})
  }
}

  deleteItem(){
    let listArray=this.state.todolist;
    listArray=[]
    this.setState({todolist: listArray})
  }

  crosseWord (event){
    const li = event.target;
    li.classList.toggle("crossed");
  }

  onFormSubmit(e){
    e.preventDefault();
  }


    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
            <input type="text" 
            placeholder="What needs to be done today?"
            onChange={(e)=> {this.onChangeEvent (e.target.value)}}
            value={this.state.userInput}/>
            </div>
            <div className="container">
            <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
            {this.state.todolist.map((item, index) => (
                <li onClick={this.crosseWord} key={index}>
                    <img src={four} width="40px" alt="check"/>
                    {item}
                </li>
            ))}
            </ul>
        <div className="container">
        <button onClick={()=> this.deleteItem()} className="btn delete">Delete</button>
        </div>
        </form>
        </div>
        )
    }
}