
import './App.css';
import Container from './child.js';
import { TransactionProvider } from './transactionContext';

function App() {
  return (
    <div>
      <TransactionProvider>
        <Container/>
      </TransactionProvider>
      
      
      
    </div>
  );
}

export default App;
