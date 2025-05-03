import Card from './components/Card';
import Card2 from './components/Card2';
import './App.css';
import ReactBootstrap from './components/React_Bootstrap/ReactBootstrap';
import STATE from './STATE';
import CONDITIONAL_RENDARING from './CONDITIONAL_RENDARING/index';
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS/index';
import EVENT_BINDING from './EVENT_BINDING';
import HOOKS_USESTATE from './HOOKS_USESTATE/index';
import HOOKS_USESTATE2 from './HOOKS_USESTATE/index2';

function App() {

  return (
    <>
      {/* <Card name="card1" disc="This is card description" />
      <Card2 name="Hello from card 2" />
      <button>Click Me</button> */}
      {/* <ReactBootstrap /> */}
      {/* <div> <STATE /> </div> */}
      {/* <div> <CONDITIONAL_RENDARING /> </div> */}
      {/* <div><EVENT_HANDLER_CLASS /></div> */}
        {/* <div><EVENT_BINDING /></div> */}
      <div>
        <h1><HOOKS_USESTATE /><HOOKS_USESTATE2 /></h1>
      </div>
    </>
  )
}

export default App
