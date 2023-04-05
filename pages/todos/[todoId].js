import React, { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function todoDetails() {
    let todoDetails;

    const router = useRouter();
    const todoId = router.query.todoId;
    useEffect(() => {
        fetch(`/api/todos/${todoId}`)
            .then((res) => res)
            .then((data) => {
                todoDetails = data;
            });
    }, [])
    return (
        <div>todoDetails
            <h2>{todoDetails?.title}</h2>
            <p>{todoDetails?.description}</p>
        </div>
    )
}
