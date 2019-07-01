import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

const buttonStyle = {
    color: 'blue',
    fontSize: '100px',
    padding: '100px',
    width: '100px',
    height: '100px',
    margin: '0',
    zIndex: '10',
    overflow: 'hidden',
    boxSizing: 'border-box'
    
}
const container = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexFlow: 'column-wrap'

}
const centerValue = {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 'auto'
}

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            value: null,
        };

    }
    render() {
      return (
        <div>
            <button style={buttonStyle} className="square"
         onClick={() => this.setState({value: 'X'})}
        >
            <div style={centerValue}>
                {this.state.value}
            </div>
          
        </button>
        </div>
        
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div style={container}>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div  className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  