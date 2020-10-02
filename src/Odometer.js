import React from 'react'

class Odometer extends React.Component {

    constructor() {
      super();
      this.state = {
        count : 0,
      }
    }
  
    changeOdometer(change) {
      this.setState(prevState => {
        return {count: prevState.count >= 9999 ? prevState.count - 10000 : prevState.count + change
        }
      });
    }
    render() {
      return (
        <>
          <h3>Odometer: {this.state.count.toString().padStart(4, "0")}</h3>
          <button onClick={() => this.changeOdometer(1)}>+1</button>
          <button onClick={() => this.changeOdometer(10)}>+10</button>
          <button onClick={() => this.changeOdometer(100)}>+100</button>
          <button onClick={() => this.changeOdometer(1000)}>+1000</button>
        </>
      )
    }
  }

  export default Odometer;