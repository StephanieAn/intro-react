import './App.css';
import Title from './Components/header.js';
import List from './Components/list.js';
import Form from './Components/form.js';
import Foot from './Components/foot'

function App() {
  return (
    <div className="App">
      <Title/>
      <main>
        <Form/>
        <List/>
      </main>
      <Foot/>
    </div>
  );
}

export default App;
