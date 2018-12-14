import React, { Component } from 'react';
import './App.css';

import Item from './Item';

class App extends Component {
  state = {
      items: [
          {
              id: 1,
              description: 'Jackets',
              totalReturned: 0,
              totalAvailable: 4
          },
          {
              id: 2,
              description: 'Pencils',
              totalReturned: 0,
              totalAvailable: 11
          }
      ]
  };

  changeTotalReturned = (id, value) => {
    this.setState(prevState => {
      return {
          items: prevState.items.map(item => {
            if (item.id === id) {
              return {...item, totalReturned: value}
            }
            return item;
          }),
      }
    })
  };

  render() {
    return (
      <div className="App">
          { this.state.items.map(itemProps => (
                <Item
                    changeTotalReturned={this.changeTotalReturned}
                    key={itemProps.id}
                    {...itemProps}
                />))
          }
      </div>
    );
  }
}

export default App;
