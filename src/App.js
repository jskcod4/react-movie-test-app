import { useState, useRef, useEffect } from 'react';
import { fromEvent, timer } from 'rxjs';
import { debounce, map, distinctUntilChanged } from 'rxjs/operators';

import './App.css';

import CardList from 'components/card-list';
import TrendingList from 'components/trending-list';

import { GenderContextProvider } from 'context/GenderContext';

function App() {
  const [keyword, setKeyword] = useState('Interstellar');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const query = evt.target.value ? evt.target.value : 'Interstellar';

    setKeyword(query);
  };

  const inputRef = useRef();

  useEffect(() => {
    const inputChange = fromEvent(inputRef.current, 'input')
      .pipe(
        distinctUntilChanged(),
        debounce(() => timer(450)),
        map((res) => res?.target?.value)
      )
      .subscribe((value) => {
        const query = value ? value : 'Interstellar';
        setKeyword(query);
      });

    return () => inputChange.unsubscribe();
  }, []);

  return (
    <GenderContextProvider>
      <div className="App">
        <div className="sidebar">
          <TrendingList type="day" />
          <TrendingList type="week" />
        </div>
        <div className="content">
          <div className="content-header">
            <h2 className="app-title">Amazing Movies</h2>
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-input"
                placeholder="Search your favorite movies ..."
                ref={inputRef}
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
