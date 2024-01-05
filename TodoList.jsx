import { Component } from 'react';
import React from 'react';
import './TodoList.module.css'

class TodoList extends React.Component {
    render() {
        const todo = ['Clean my room', 'Wash the motorcycle', 'Attend blockchain Class'];
        return (    
            <div class='list'>
                <h3>To Do List</h3>
                <ul>
                    {todo.map((task, index) => <li key={index}>{task}</li>)}
                </ul>
            </div>
        );
      }
    }

export default TodoList