import { useState } from 'react';

import './App.css';

import CardList from 'components/card-list';
import GenderList from 'components/gender-list';

import { GenderContextProvider } from 'context/GenderContext';

function App() {
  const [keyword, setKeyword] = useState('Interstellar');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setKeyword(evt.target.value);
  };

  return (
    <GenderContextProvider>
      <div className="App">
        <div className="sidebar">
          <GenderList />
        </div>
        <div className="content">
          <div className="content-header">
            <h2 className="app-title">Amazing Movies</h2>
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-input"
                placeholder="Search your favorite movies ..."
                onChange={handleSubmit}
              />
            </form>
          </div>
          <CardList keyword={keyword} />
        </div>
      </div>
    </GenderContextProvider>
  );
}

export default App;
