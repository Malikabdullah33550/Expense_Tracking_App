import './App.css';
import BalancePage from './components/BalancePage';
import HistoryPage from './components/HistoryPage';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="App">
      <BalancePage />
      <HistoryPage />
      <AddTransaction />
    </div>
  );
}

export default App;
