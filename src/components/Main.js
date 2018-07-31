import React from 'react' //, {Component}
import axios from 'axios'
import Weather from '../containers/Weather'
import FaSearch from 'react-icons/lib/fa/search'
import FaClose from 'react-icons/lib/fa/close'

export default class Main extends React.Component{


  constructor(){
    super();
    this.state={error:'', isLoaded:false,  term:'', submitted:false, data:[] };
    this.onInputChange=this.onInputChange.bind(this);
  	this.onFormSubmit=this.onFormSubmit.bind(this);
  }

  //on form submit grabs forecast data
  onFormSubmit(e){
    e.preventDefault();
    this.fetchForecast();
  }
  clearValue(e){
      this.setState({term:''});
  }
  //updates search term on change
  onInputChange(e){
    this.setState({term: e.target.value});
  }

  // async api call for the forecast data
  fetchForecast(){
    const url ="http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.state.term+"&units=metric&cnt=7&appid=6c3ed975f7e6adab4fce28412326d7b7"


    axios.get(url)
    .then(response=>{
      this.setState({
        submitted:true,
        isLoaded: true,
        data: response.data
     })
    })
    .catch( (error) => {
      this.setState({
        submitted:true,
        isLoaded: true,
        error
      })
    })
  }

    render(){
        return (
          <div id="main">
            <form onSubmit={this.onFormSubmit}>
              <FaSearch onClick={this.onFormSubmit} />
              <input placeholder="Get five day forecast in any city" value={this.state.term} onChange={this.onInputChange}/>
              <FaClose onClick={this.clearValue} />
            </form>
            <hr/>
            <Weather submitted={this.state.submitted}  error={this.state.error} isloaded={this.state.isLoaded} data={this.state.data}  />
          </div>
      )
    }
}
