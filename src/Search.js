import React from 'react';

class Search extends React.Component {

    state = {
        id: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div>
               <form onChange={this.handleChange}>
                <label htmlFor="Search Buffet">Search</label>
                <input type="text" name="id"/> 
               </form>
            </div>
        )
    }
}
export default Search;