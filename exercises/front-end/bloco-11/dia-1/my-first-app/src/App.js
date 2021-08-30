import './App.css';

const Task = (value) => {
	return (
		<li>{value}</li>
	)
}

const tarefas = ['Comer', 'Dormir', 'Codar', 'Jogar'];

function App() {
  return (
  <ol>
	  {tarefas.map((tarefa) => Task(tarefa))}
  </ol>
  );
}

export default App;
