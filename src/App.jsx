import './App.css'
import TodoList from './TodoList'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodos } from './thunks';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App