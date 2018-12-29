import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));