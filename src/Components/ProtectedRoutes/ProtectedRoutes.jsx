import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import jwt_decode from "jwt-decode";

export default class ProtectedRoutes extends Component {
    render() {
        let token = localStorage.getItem('token');
        try {
            jwt_decode(token);
            if (token) {
                if (this.props.path === '/home') {
                    return (<Route path={this.props.path} component={this.props.component} />)
                } else if (this.props.path === '/about') {
                    return (<Route path={this.props.path} component={this.props.component} />)
                } else if (this.props.path === '/tvshow') {
                    return (<Route path={this.props.path} component={this.props.component} />)
                } else if (this.props.path === '/people') {
                    return (<Route path={this.props.path} component={this.props.component} />)
                } else if (this.props.path === '/networks') {
                    return (<Route path={this.props.path} component={this.props.component} />)
                } else if (this.props.path === '*') {
                    return (<Route path={this.props.path} component={this.props.component} />)
                }

            }
        } catch (error) {
            localStorage.clear();
            window.alert('invalid token');
            return <Redirect to='/login' />
        }
    }
}
