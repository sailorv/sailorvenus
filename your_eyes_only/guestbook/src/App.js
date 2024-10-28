import './styles/style.css';
import GuestbookForm from './components/form.jsx';
import GuestbookEntries from './components/entries/entries.jsx';

function App() {
  return (
    <div className="layout" style={{position: 'relative'}}>
      <div className="column">
        <div className="box" style={{position: 'sticky'}}>
        <GuestbookForm />
        </div>
      </div>
        <GuestbookEntries />
    </div>
  );
}

export default App;
