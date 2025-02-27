import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangedTodoText = (event) => setTodoText(event.target.value);

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    }

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

    const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangedTodoText} onClick={onClickAdd} disabled={isMaxLimitIncompleteTodos} />
            {isMaxLimitIncompleteTodos && <p style={{ color: "red" }}>登録できるtodoは5つまで</p>}
            <IncompleteTodo todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteTodo todos={completeTodos} onClick={onClickBack} />
        </>
    );
}
