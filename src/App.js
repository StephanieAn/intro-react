import './App.css';
import Title from './Components/header.js';
import List from './Components/list.js';
import Form from './Components/form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
      </header>
      <main>
        <Form/>
        <List/>
      </main>
    </div>
  );
}

export default App;
