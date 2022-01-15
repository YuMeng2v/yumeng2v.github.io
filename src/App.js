import logo from './logo.svg';
import './App.css';
import RouterWrap from './router'
import RouterContent from './routerC'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            //routerWrap for 上方导航栏
            //routercontent for 下方跳转连接 
          }
          <RouterWrap/>
        </div>
      </header>
    </div>
  );
}
export default App;
//routerwrap = router.js
//so The corresponding component of the path should be defined there

