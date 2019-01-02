import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar';
import ResultIndex from './components/ResultIndex';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ResultIndex />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));