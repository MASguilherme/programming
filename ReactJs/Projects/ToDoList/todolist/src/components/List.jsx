import React from "react";

function List(){
    return(
        <div className="list-container">
            <div className="heading">
                <h1>To Do List</h1>
            </div>
            <div className="form">
                <input type="text" className="text-list" placeholder="Write a task" />
                <button type="submit">
                    <span>Add</span>
                </button>
            </div>
        </div>
    );
}

export default List;