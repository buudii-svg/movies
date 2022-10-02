import React, { Component } from 'react'
import axios from 'axios';
export default class Login extends Component {
    state = { errorMessage: "" }
    user = {
        email: '',
        password: ''
    }
    getDataFromForm = (e) => {
        this.user[e.target.name] = e.target.value;
        console.log(this.user);
    }
    sendData = async (e) => {
        e.preventDefault();
        let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', this.user);
        console.log(data);
        if (data.message === 'success') {
            localStorage.setItem('token', data.token);
            this.props.history.replace('/home');
        } else {
            this.setState({ errorMessage: data.message });
        }
    }
    render() {
        return (
            <>
                <div className="w-50 mx-auto my-5">
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getDataFromForm} type="email" name='email' placeholder='Email' className='form-control mt-3' />
                        <input onChange={this.getDataFromForm} type="password" name='password' placeholder='Password' className='form-control mt-3' />
                        <div className="alert alert-transparent" role="alert">
                            {this.state.errorMessage}
                        </div>
                        <button className='btn btn-info float-right mt-3'>Login</button>
                    </form>
                </div>
            </>
        )
    }
}
