import './App.css';
import GuestbookForm from './components/form.jsx';
import GuestbookEntries from './components/entries/entries.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Guestbook</h1>
      </header>
      <div className="Guestbook">
        <GuestbookForm />
        <GuestbookEntries /> 
      </div>
    </div>
  );
}

export default App;
