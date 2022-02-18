import React, { useState } from "react";

export default function Login({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        login({ email, password })
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter email...' />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter password...' />
            <button text='submit'>Login</button>
        </form>
    )
}
