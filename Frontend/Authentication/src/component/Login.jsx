import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const data = await response.json()
            if(data.success){
                console.log('Login created successfully')
                navigate('/home')
            }
            else{
               console.log('login is failed')
            }
        }
        catch(error){
            console.error("Error during login", error)
            setMessage("An error occured during login")
        }
        setForm(form)
        console.log('form is submited', form)
    }
    return (
        <div className='border-1'>
            <div className='border-2'>
                <form onSubmit={handleSubmit} className='forn-container'>

                    <div className='form-container-1'>
                        <label>Email</label>
                        <input className='input-width' name='email' value={form.email} type='text' onChange={handleChange} placeholder='Enter your name' />
                    </div>
                    <div className='form-container-1'>
                        <label>Password</label>
                        <input className='input-width' type='text' value={form.password} name='password' onChange={handleChange} placeholder='Enter your password' />
                    </div>
                    <div className='btn-1'>
                        <button className='btn-width'>Login</button>
                    </div>
                    <p className='p-margin'>Don't have an account? <a href='/'>Signup</a></p>
                </form>
            </div>
        </div>
    )
}
export default Login