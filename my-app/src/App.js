import './App.css';
// import File1 from './file';
import React from 'react';


class Joke extends React.Component { 
  constructor (){
    super()
    this.state = {
      joke: null,
      setup: null
    }
  }

  clickme(){
      fetch('https://official-joke-api.appspot.com/random_joke')
      .then(re => re.json())
      .then(da => 
        this.setState({
          setup: da['setup'],
          joke: da['punchline']

        }) 
        )
        

  }
  
  render() {

    return(
          <div>

              <p>{this.state.setup}</p>
              <p>{this.state.joke}</p>
            <button onClick={() => {this.clickme()}}> Generate A Joke
          </button>
         
          </div>
    )
  }
};



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Joke />
      </header>
    </div>
  );
}

export default App;
