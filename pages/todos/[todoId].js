import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function todoDetails() {
    const [todoDetails, setTodoDetails] = useState({});

    const router = useRouter();
    const todoId = router.query.todoId;
    useEffect(() => {
        fetch(`/api/todos/${todoId}`)
            .then((res) => res.json())
            .then((data) => {
                setTodoDetails(data[0]);
            });
    }, [])
    return (
        <div>
            <h1>Todo Details</h1>
            <h2>{todoDetails?.title}</h2>
            <p>{todoDetails?.description}</p>
        </div>
    )
}
