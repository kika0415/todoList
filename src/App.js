import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

const App = () => {
  const todos = [
    { id: 1, name: 'eating', done: true },
    { id: 2, name: 'sleeping', done: true },
    { id: 3, name: 'coding', done: false },
  ];
  return (
    <div className='App'>
      <Header />
      <Todos todos={todos} />
      <Footer todos={todos} />
    </div>
  );
};

export default App;
