

function AddTodoFrom(props){

       const activityArr   = props.activityArr
       const setActivityArr  =props.setActivityArr

       const [newactivity,setNewActivity] =useState("")


function handleChange(evt)
{
setNewActivity(evt.target.value)
}
function addActivity() {
       setActivityArr([...activityArr, {id:activityArr.length+1, activity:newactivity}])
       setNewActivity("")
       
}

       
return(

       <div className="flex flex-col gap-3">
       <p className="text-2xl font-bold">Manage Activities</p>
       <div>
        <input value={newactivity} onchange={handleChange}  type="text" className=" bg-transparent p-2" placeholder="Next Activity?" />
        
        <button onClick={addActivity} className="text-red-700 ">Add</button>
        
        </div>
       </div>
)

}

export default AddTodoFrom