import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits;
    habits.forEach((item) => {
      if (item.id === habit.id) item.count++;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits;
    habits.forEach((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        item.count = count < 0 ? 0 : count;
      }
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
  };

  render() {
    return (
      <ul className="habits">
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
