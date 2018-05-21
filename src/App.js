import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <nav>
             <Link to='/'>Landing</Link>
             <Link to='/library'>Library</Link>
        </nav>
<<<<<<< HEAD
          <h1>Bloc Jams</h1>
        </header>
        <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album" component={Album} />
         </main>
=======
           <h1>Bloc Jams</h1>
         </header>
        <main>
         <Route exact path="/" component={Landing} />
         <Route path="/library" component={Library} />
         <Route path="/album" component={Album} />
        </main>
>>>>>>> 04e7bfed81324353d4c819f4d8c57bbb7f998ce0
      </div>
    );
  }
}

export default App;
