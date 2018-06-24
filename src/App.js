import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date1 :'',
                  date2:'',
                  date1Validation:'aaaaaaaaaa',
                  date2Validation:'',
                  daysNumber:''};
    this.handleDate1Change = this.handleDate1Change.bind(this);
    this.handleDate2Change = this.handleDate2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDate1Change(event) {
  this.setState({date1:event.target.value});
  }
  handleDate2Change(event) {
  this.setState({date2:event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    let date1 = this.state.date1;
    let americanDate2 = this.state.date2;
    let date2 = new Date(this.state.date2);
    if(date1.match(/^[0-3]\d\/[0-1]\d\/\d{4}$/)){
      console.log('date 1 is validate');
    }
    if(!this.state.date2.match(/^[0-3]\d\/[0-1]\d\/\d{4}$/)){
      console.log('date2 is notvalid');
    }
    console.log('aaaaaa');
  }

  render() {
    return (
      <div className="form-style">
        <h1 className="title">Calculez le nombre de jours entre 2 dates</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <strong>DATE 1</strong>
          </label>
          <input type="text" value={this.state.date1} onChange={this.handleDate1Change} placeholder='dd/mm/yyyy'/><br/>
          <div className="required">
            {this.state.date1Validation}
          </div>
          <label>
            <strong>DATE 2</strong>
          </label>
          <input type="text" value={this.state.date2} onChange={this.handleDate2Change} placeholder='dd/mm/yyyy'/><br/>
          <div>
            {this.state.date2Validation}
          </div>
          <input type="submit" value="Search" />
        </form><br/>
        <div>
          {this.state.daysNumber}
        </div>
      </div>
    );
  }
}

export default App;
