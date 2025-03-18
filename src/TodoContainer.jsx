import AddTodoFrom from "./AddTodoFrom"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer(){
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "have Breakfast"
        },
        {

            id: 3,
            activity: "Take a shower"
        }

    ])
 
    return(
        
        
            <div className="flex gap-5 flex-wrap">
       <AddTodoFrom activityArr={activityArr} setActivityArr={setActivityArr}/>
       <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
       </div>

       

    )
}
export default TodoContainer