import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Body.css'

function Body (){


    var[fullname,setfullname] = useState('')
    var[username,setusername] = useState('')
    var[password,setpassword] = useState('')

    function Registeruser (event){

        event.preventDefault()

        var users = JSON.parse(localStorage.getItem('users') || '[]')

        var newuser = {
            fullname: fullname,
            username: username,
            password: password
        }

        users.push(newuser)

        localStorage.setItem('users', JSON.stringify(users))



        setfullname('')
        setusername('')
        setpassword('')
    }

    return <div>

            <div className='row justify-content-center'>

                <div className='col-md-6'>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7XdR1KwCifL.png" alt="facebook" />
                </div>

                <div className='col-md-4 form-section'>
                    <h1>Register</h1>
                    <form onSubmit={Registeruser}>
                        <input type="text" className='form-control name' required value={fullname} placeholder='Full Name' onChange={event=>setfullname(event.target.value)} />
                        <input type="text" className='form-control username' required value={username} placeholder='Username' onChange={event=>setusername(event.target.value)}/>
                        <input type="password" className='form-control pass' required value={password} placeholder='Password' onChange={event=>setpassword(event.target.value)}/>


                        <input type="submit" value='SIGN UP' className='btn btn-primary' />
                    </form>
                </div>

            </div>
        </div>
}

export default Body