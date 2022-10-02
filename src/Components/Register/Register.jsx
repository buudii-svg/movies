import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
    user = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }
    getDataFromForm = (e) => {
        this.user[e.target.name] = e.target.value;
        console.log(this.user);
    }
    sendData = async (e) => {
        e.preventDefault();
        let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signup', this.user);
        console.log(data);
        if (data.message === 'success') {
            e.target.reset();
        }
    }
    render() {
        return (
            <>
                <div className="w-50 mx-auto my-5">
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getDataFromForm} type="text" name='first_name' placeholder='First Name' className='form-control mt-3' />
                        <input onChange={this.getDataFromForm} type="text" name='last_name' placeholder='Last Name' className='form-control mt-3' />
                        <input onChange={this.getDataFromForm} type="email" name='email' placeholder='Email' className='form-control mt-3' />
                        <input onChange={this.getDataFromForm} type="password" name='password' placeholder='Password' className='form-control mt-3' />
                        <button className='btn btn-info float-right mt-3'>Register</button>
                    </form>
                </div>
            </>
        )
    }
}
