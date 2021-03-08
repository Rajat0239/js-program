import logo from './logo.svg';
import './App.css';
import addition, {subtraction, multiplication, divide} from './Calculator'

function App() {
  return (
    <>
      <ol>
        <li>addition of two numbers is = {addition(1,2)}</li>
        <li>subtraction of two numbers is = {subtraction(1,2)}</li>
        <li>divide of two numbers is = {divide(1,2)}</li>
        <li>multiply of two numbers is = {multiplication(1,2)}</li>
      </ol>
    </>
  );
}

export default App;
