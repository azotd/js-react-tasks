import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
export default function TodoBox() {
  const [tasks, setTasks] = React.useState([]);
  const [newTaskText, setNewTaskText] = React.useState('');

  React.useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(routes.tasksPath());
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    try {
      const response = await axios.post(routes.tasksPath(), { text: newTaskText });
      setTasks(update(tasks, { $push: [response.data] }));
      setNewTaskText('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleToggleTaskState = async (id, currentState) => {
    const isFinished = currentState === 'finished';
    const path = isFinished ? routes.activateTaskPath(id) : routes.finishTaskPath(id);

    try {
      const response = await axios.patch(path);
      const updatedTask = response.data;

      const index = tasks.findIndex((t) => t.id === id);
      if (index !== -1) {
        setTasks(update(tasks, { [index]: { $merge: updatedTask } }));
      }
    } catch (error) {
      console.error('Error toggling task state:', error);
    }
  };

  // Фильтруем и сортируем по ID в порядке убывания (новые сверху)
  const activeTasks = tasks
    .filter((t) => t.state === 'active')
    .sort((a, b) => b.id - a.id);

  const finishedTasks = tasks
    .filter((t) => t.state === 'finished')
    .sort((a, b) => b.id - a.id);

  return (
    <div>
      <div className="mb-3">
        <form className="todo-form mx-3" onSubmit={handleSubmit}>
          <div className="d-flex col-md-3">
            <input
              type="text"
              value={newTaskText}
              required
              className="form-control me-3"
              placeholder="I am going..."
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">add</button>
          </div>
        </form>
      </div>

      {activeTasks.length > 0 && (
        <div className="todo-active-tasks">
          {activeTasks.map((task) => (
            <Item key={task.id} task={task} onClick={handleToggleTaskState} />
          ))}
        </div>
      )}

      {finishedTasks.length > 0 && (
        <div className="todo-finished-tasks">
          {finishedTasks.map((task) => (
            <Item key={task.id} task={task} onClick={handleToggleTaskState} />
          ))}
        </div>
      )}
    </div>
  );
}
// END


