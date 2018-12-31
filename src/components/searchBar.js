import React from 'react'

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      location: 'San Francisco, CA'
    }
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state, 'GET from Yelp');
  };
  

  onSearchInputChange = e => {
    this.setState({searchTerm: e.target.value});
  }

  onLocationInputChange = e => {
    this.setState({location: e.target.value});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
            {/* <label>Search</label> */}
            <input 
              type='text' 
              onChange={this.onSearchInputChange}
              value={this.state.searchTerm}
              placeholder='Search'
              />
            {/* <input 
              type='text' 
              onChange={this.onLocationInputChange}
              value={this.state.location}
              /> */}
        </form>
      </div>
    );
  }
}

export default SearchBar;