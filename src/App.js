import logo from './logo.svg';
import './App.css';
import RouterWrap from './router'
//入口文件
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

