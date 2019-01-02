import React from 'react'
import ResultDetail from './ResultDetail';

class ResultIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  render() {
    return (
      <div> 
        <ul>
          <ResultDetail/>
        </ul>
      </div>
    )
  }
}

export default ResultIndex;