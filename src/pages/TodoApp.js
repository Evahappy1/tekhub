import { useState } from "react"
import Swal from "sweetalert2"
export default function TodoApp() {

    //1.create useStates to store the task to be added and the array of tasks
    const [newItem, setNewItem] = useState();
    const [items, setItems] = useState([])

    //4. Write a function to handle the button click event.
    const addTaskHandler = () => {
        // Check if the input is empty (i.e if there is a new item)
        if (!newItem) {
            Swal.fire("please enter a task");
            return;
        }
        // 5. Add each task t the array of tasks after the button is clicked
        setItems([...items, { id: Date.now(), newItem }]);

    }

    function deleteItemHandler(id) {
        // filter and retain all the items that do not have the parameter id
        setItems(items.filter(x => x.id !== id))
        Swal.fire("Task deleted");
    }

    return <>
        <h1 className="text-center">Todo App</h1>
        <div className=" todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-success">
            {/* 2. Add an OnChange event to the input */}
            <input onChange={e => setNewItem(e.target.value)} placeholder="Enter Task Description" type="text" className="fs-1 p-3 rounded" />
            {/* 3.Add an onClick to the button */}
            <button onClick={addTaskHandler} className="btn btn-outline success p-3 fs-5">Add Task</button>
        </div>
        <div className="tasks">
            {/* 6. Map through the task and display them on the browser */}

            {
                items.map(x => {
                    return <div key={x.id} className="bg-light text-success border border-success fs-5 d-flex justify-content-between m-3 p-5 rounded">
                        {x.newItem}
                        {/* 7. Add the deleteItemHandler to the trash button */}
                        <i onClick={() => deleteItemHandler(x.id)} style={{ cursor: "pointer" }} className="fa fa-trash text-danger"></i>
                    </div>
                })

            }

        </div>


    </>
}