import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  inputRef = React.createRef();

  handleAdd = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    const habit = { id: 0, name: name, count: 0 };
    this.props.onAdd(habit);
    this.inputRef.current.value = '';
  };

  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <div className="habits">
        <form className="add-form" onSubmit={this.handleAdd}>
          <input
            type="text"
            className="add-input"
            placeholder="Habit"
            ref={this.inputRef}
          />
          <button className="add-button">Add</button>
        </form>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.handleReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
