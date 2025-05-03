import React, { Component } from 'react';

function Welcome() {
    return <h1>Welcome to React From Internal function</h1>;
}

function Welcome2() {
    return React.createElement('h1', null, 'Welcome to React From Internal function 2');
}

function Todo() {
    return (
        <div>
            <h1>Todo List 1</h1>
            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        </div>
    );
}

function Todo2() {
    return React.createElement('div', null, 
        React.createElement('h1', null, "Todo list 2"),
        React.createElement('ul', null, 
            React.createElement('li', null, "Task 1"),
            React.createElement('li', null, "Task 2"),
            React.createElement('li', null, "Task 3"),
        )
    )
}

class Card2 extends Component {
    render() {
        return (
            <div>
                <Welcome />
                <Welcome2 />
                <Todo />
                <Todo2 />
                <h2>{this.props.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur totam repudiandae dolor reprehenderit consequuntur animi, sapiente nihil ex ipsum sunt quo illum iure cumque tempore recusandae praesentium id blanditiis ducimus ut quos alias aliquid fugiat! Libero qui delectus, sunt quos molestiae commodi numquam eveniet eligendi, eaque vel illo. Earum, ullam.</p>
            </div>
        );
    }
}
export default Card2;