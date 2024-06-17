import { useState } from "react";

const ToDoItem = ({ text, completed, important }) => {
    const [textState, setTextState] = useState(text);
    const [completedState, setCompletedState] = useState(completed);

    return (
        <div 
            className={completedState ? "completed" : ""}
            onClick={() => {setCompletedState(!completedState)}}
        >
            {important ? "*" : ""} {textState}
        </div>
    );
};

export default ToDoItem;