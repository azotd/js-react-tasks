import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], newTask: ''};
    }

    handleInputChange = (e) => {
        this.setState({newTask: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {newTask, tasks} = this.state;
        if (newTask.trim()) {
            const newTasks = [...tasks, {id: uniqueId(), text: newTask.trim()}];
            this.setState({tasks: newTasks, newTask: ''});
        }
    }

    handleRemove = (id) => {
        const {tasks} = this.state;
        const newTasks = tasks.filter(task => task.id !== id);
        this.setState({tasks: newTasks});
    }

    render() {
        const {tasks, newTask} = this.state;

        return (
            <div>
                <div className='mb-3'>
                    <form className='d-flex' onSubmit={this.handleSubmit}>
                        <div className='me-3'>
                            <input 
                                type='text'
                                value={newTask}
                                onChange={this.handleInputChange}
                                required=''
                                className='form-control'
                                placeholder='I am going...'
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>add</button>
                    </form>
                </div>
                <div>
                    {tasks.map(task => (<Item key={task.id} task={task.text} onRemove={() => this.handleRemove(task.id)} />))}
                </div>
            </div>
        );
    }
}
// END