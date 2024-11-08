import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
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
            const response = await fetch('http://localhost:8080/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const data = await response.json()
            if(data.success){
                console.log('User created data successfully')
                navigate('/login')

            }
            else{
                console.log( 'data is not created')
            }
        }
        catch(error){
            console.error("Error during signup", error)
            console.log('Data is not created')
        }
        setForm(form)
        console.log('form is submited', form)
    }
    return (
        <div className='border-1'>
            <div className='border-2'>
                <form onSubmit={handleSubmit} className='forn-container'>
                    <div className='form-container-1'>
                        <label>Name</label>
                        <input className='input-width' name='name' type='text' value={form.name} onChange={handleChange} placeholder='Enter your name' />
                    </div>
                    <div className='form-container-1'>
                        <label>Email</label>
                        <input className='input-width' name='email' value={form.email} type='text' onChange={handleChange} placeholder='Enter your name' />
                    </div>
                    <div className='form-container-1'>
                        <label>Password</label>
                        <input className='input-width' type='text' value={form.password} name='password' onChange={handleChange} placeholder='Enter your password' />
                    </div>
                    <div className='btn-1'>
                        <button className='btn-width'>SignUp</button>
                    </div>
                    <p className='p-margin'>Already have an account? <a href='/login'>Login</a></p>
                </form>
            </div>
        </div>
    )
}

export default Signup