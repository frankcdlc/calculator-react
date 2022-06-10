import './app.css';

function App() {
  return (
    <div className="calculator-grid">
      <div className='calculator-header'>Add expense to GROSERIES</div>
      <div className='output'>
        <div className='previous-operand'></div>
        <div className='current-operand'>$ 22</div>
      </div>
      <button className='operator'>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>DEL</button>
      <button className='operator'>X</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>C</button>
      <button className='operator'>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='span-two'>=</button>
      <button className='operator'>+</button>
      <button>CAL</button>
      <button>0</button>
      <button>.</button>
      <div className='date'>
        <h3>Thursday March, 10, 2022</h3>
      </div>
    </div>
  );
}

export default App;
