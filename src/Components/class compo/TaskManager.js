import React from "react"
import CompletedComponent from "./CompletedCompleted"
import PendingComponent from "./PendingComponent"
class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tododata:[
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Comeplete assesment",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 2,
                    "title": "pratice angular",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 3,
                    "title": "complete react task",
                    "completed": false
                  },
                  {
                    "userId": 1,
                    "id": 4,
                    "title": "build files",
                    "completed": true
                  },
                  {
                    "userId": 1,
                    "id": 5,
                    "title": "work on git bash",
                    "completed": true
                  }
            ]
        }
    }
    getPending=()=>{
       const arr= this.state.tododata.filter((item)=>item.completed===false)
        return arr
    }
    getCompleted=()=>{
        const arr= this.state.tododata.filter((item)=>item.completed===true)
        return arr
    }
    render(){
        return(
            <div>
                <h1>Task Manager</h1>
               <PendingComponent prop1={this.getPending()}></PendingComponent>
               <CompletedComponent prop1={this.getCompleted()}></CompletedComponent>
            </div>
        )
    }
}
export default TaskManager