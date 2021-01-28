import React from 'react';
import useForm from './useForm'

export default function Form() {

    const [username, setUsername] = useForm('');
    const [password, setPassword] = useForm('');
    const [email, setEmail] = useForm('');
    const [reset] = useForm('')

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">username</label>
                    <input value={username} onChange={setUsername} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">password</label>
                    <input value={password} onChange={setPassword} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">email</label>
                    <input value={email} onChange={setEmail} type="email" className="form-control" />
                </div>
                <button onSubmit={reset} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
