import logo from './logo.svg';
import './App.css';
import RouterWrap from './router'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <RouterWrap/>
        </div>
      </header>
    </div>
  );
}
export default App;
//routerwrap = router.js
//so The corresponding component of the path should be defined there

