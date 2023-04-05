import React from 'react'
import { useRouter } from 'next/router'


export default function todoDetails() {
    const router = useRouter();
    const todoId = router.query.todoId;
    return (
        <div>todoDetails {todoId}</div>
    )
}
