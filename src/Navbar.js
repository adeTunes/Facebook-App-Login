import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'

function Navbar(){
    var[username, setusername] = useState('')
    var[password, setpassword] = useState('')
    var navigate = useNavigate()


    function logout(){
        localStorage.removeItem('loggedin')
        navigate('/', {replace: true})
    }

    function loginValdation(event){
        event.preventDefault()
        var users = JSON.parse(localStorage.getItem('users'))

        const filteredUser = users.some(user => user.username === username)
        const filteredPass = users.some(user =>  user.password === password)
        if (filteredUser && filteredPass){
            alert('Login Successful')
            navigate("/dashboard", {replace: true})
            localStorage.setItem('loggedin', 'loggedin')
            setusername('')
            setpassword('')
        }
        else if (!filteredUser && filteredPass){
            alert('Please check the username again')
        }
        else if(filteredUser && !filteredPass){
            alert('Please check the password again!')
        }
        else {
            alert('Invalid Login details')
        }
    }

    return <div>
        <div className='row nav'>
            <div className='col-md-6'>
                <h1>Facebook</h1>
            </div>
            <div className='col-md-5'>
                { 
                    (()=>{
                    if(localStorage.getItem('loggedin')){
                        return <button type="submit" onClick={logout}>LOGOUT</button>
                    }
                    else{
                        return (
                            <form onSubmit= {loginValdation}>
                                <input className='input user' type="text" required placeholder='Username' value={username} onChange={event=>setusername(event.target.value)} />
                                <input className='input pass' type="password" required placeholder='Password' value={password} onChange={event=>setpassword(event.target.value)} />
                                <input className='butn' type="submit" value="LOGIN" />
                            </form>
                        )
                    }
                })()
            }
            </div> 
        </div>
    </div>
}

export default Navbar