import ToDoItem from "./todoItem";

const ToDoList = () => {    
    const todoItem = {
        text: "my text",
        completed: false,
        important: true,
    };

    return (
        <ToDoItem {...todoItem}></ToDoItem>
    );
};

export default ToDoList;