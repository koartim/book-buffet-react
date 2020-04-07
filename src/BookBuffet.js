import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class BookBuffet extends React.Component {

    state = {
        email: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
       let rsp = await axios.post(`https://httpbin/post`, {
            email: this.state.email
        })
    }

    render() {
        return (
            <div>
                <form onChange={this.handleChange}>
                <h1>Book Buffet Form</h1>
                <label htmlFor="email"></label>
                <input type="text" name="email"/>
                </form>
            </div>
        )
    }
}
export default BookBuffet;