import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <header className="sticky">
          <div className="container">
            <div className="nav-brand">
              <a>
                <h1>
                  <i className="snes-jp-logo brand-logo" />
                </h1>
              </a>
            </div>
          </div>
        </header>
        <div className="container">
          <main className="main-content">

            <Hello name={this.state.name} />
            <p>
              Start editing to see some magic happen :)
            </p>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
