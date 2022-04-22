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
                    "completed": false,
                    "delete":false
                  },
                  {
                    "userId": 1,
                    "id": 2,
                    "title": "pratice angular",
                    "completed": false,
                    "delete":false
                  },
                  {
                    "userId": 1,
                    "id": 3,
                    "title": "complete react task",
                    "completed": false,
                    "delete":false
                  },
                  {
                    "userId": 1,
                    "id": 4,
                    "title": "build files",
                    "completed": true,
                    "delete":false
                  },
                  {
                    "userId": 1,
                    "id": 5,
                    "title": "work on git bash",
                    "completed": true,
                    "delete":true
                  }
            ]
        }
    }
    getPending=()=>{
       const arr= this.state.tododata.filter((item)=>item.completed===false)
        return arr
    }
    getCompleted=()=>{
        const arr= this.state.tododata.filter((item)=>item.completed===true&&item.delete===false)
        return arr
    }
    changeCompletionStatus=(taskid)=>{
        const temp=[...this.state.tododata]
        const obj=temp.find((item)=>item.id===taskid)
        obj.completed=!obj.completed
        this.setState({tododata:temp})
    }
    
    render(){
        return(
            <div>
                <h1>Task Manager</h1>
               <PendingComponent prop1={this.getPending()}
               callfunc={this.changeCompletionStatus}></PendingComponent>
               <CompletedComponent prop1={this.getCompleted()}></CompletedComponent>
              
            </div>
        )
    }
}
export default TaskManager