import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date1 :'',
                  date2:'',
                  date1Validation:'',
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
    let date1 = this.state.date1.split('/');
    let date2 = this.state.date2.split('/');
    let date1TimeStamp = null;
    let date2TimeStamp = null;
    if(this.state.date1.match(/^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/) && !isNaN(new Date(date1[1]+'/'+date1[0]+'/'+date1[2]).getTime())){
      date1TimeStamp = new Date(date1[1]+'/'+date1[0]+'/'+date1[2]).getTime();
      this.setState({
          date1Validation:''
      });
    } else {
      this.setState({
          date1Validation:'cette date n\'est pas valide'
      });
    }
    if(this.state.date2.match(/^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/) && !isNaN(new Date(date2[1]+'/'+date2[0]+'/'+date2[2]).getTime())){
      date2TimeStamp = new Date(date2[1]+'/'+date2[0]+'/'+date2[2]).getTime();
      this.setState({
          date2Validation:''
      });
    } else {
      this.setState({
          date2Validation:'cette date n\'est pas valide'
      });
    }
    if(date1TimeStamp && date2TimeStamp){
      let days =Math.trunc(Math.abs(date1TimeStamp - date2TimeStamp)/(1000*60*60*24));
      this.setState({
        daysNumber:'Le nombre de jours entre les 2 dates est: '+days
      })
    } else {
      this.setState({
        daysNumber:''
      })
    }
  }
  // TODO: On peut changer le regex afin qu'il vérifie aussi si le mois contient 30,31 ou bien 28 jours, on peut même vérifier si l'année est bissextile (si l'utilisateur entre le mois de fevrier)

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
          <div className="required">
            {this.state.date2Validation}
          </div>
          <input type="submit" value="Search" />
        </form><br/>
        <h1 className="result">
          {this.state.daysNumber}
        </h1>
      </div>
    );
  }
}

export default App;
