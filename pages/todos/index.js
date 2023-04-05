import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const btn = {
    "float": "right",
    "padding": "10px 30px",
    "background": "#3c0fef",
    "borderColor": "#3c0fef",
    "borderRadius": "5px",
    "color": "white"
}

const heading = {
    "background": "rgb(131 192 255)",
    "margin": "0",
    "padding": "15px"
}

const formStyle = {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "40px"
}

const inputStyle = {
    "outline": "none",
    "padding": "6px 40px",
    "borderRadius": "5px"
}

const desc = {
    "outline": "none",
    "padding": "0 45px",
    "borderRadius": "5px"
}

const secondaryBtn = {
    "width": "80px",
    "height": "30px",
    "borderRadius": "5px",
    "color": "white",
    "background": "red",
    "borderColor": "red"
}

export default function index() {
    const [todos, setTodos] = useState([]);
    const [isAddVisible, setAddVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter()
    useEffect(() => {
        fetch("/api/todos")
            .then((res) => res.json())
            .then((data) => {
                setTodos(data)
            });
    }, [])

    const clickHandler = (id) => {
        router.push(`todos/${id}`)
    }

    const addHandler = () => {
        setAddVisible(true);
    }

    const onSubmitHandler = (e) => {
        // todos.push({ title: e.target[0].value, description: e.target[1].value });
        // console.log(todos)
        const val = { title: e.target[0].value, description: e.target[1].value };
        fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(val),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => {
                // console.log(data)
                // setTodos(data)
                fetch("/api/todos")
                    .then((res) => res.json())
                    .then((data) => {
                        setTodos(data)
                    });
            });

        e.preventDefault();
    }

    const deleteHandler = () => { }

    const updateHandler = () => { }
    return (
        <>
            <h1 className='btn' style={heading}>Todos <button style={btn} onClick={addHandler}>Add</button></h1>
            {isAddVisible ?
                <form style={formStyle} onSubmit={onSubmitHandler}>
                    <label>Title</label>
                    <input style={inputStyle} type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    <label>Description</label>
                    <textarea style={desc} type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    <button style={secondaryBtn} type='submit'>Add</button>
                    <button style={secondaryBtn} type='button' onClick={() => setAddVisible(false)}>Cancel</button>
                </form>
                : null}
            {
                todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <h3 onClick={() => clickHandler(todo.id)}>{todo.title}</h3>
                            <p>{todo.description}</p>
                            <button style={secondaryBtn} onClick={updateHandler}>Update</button>
                            <button style={secondaryBtn} onClick={deleteHandler}>Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}
