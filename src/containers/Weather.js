import React, {Component} from 'react'

const clear = require('../img/sun.png')
const cloudy = require('../img/cloudy.png')
const rain = require('../img/rainy.png')

var _ = require('lodash');

export default class Weather extends Component{

  getWeatherImg(name){
    if(name=== "Clear"){
      return <img src={clear} alt="clear"/>
    }
    else if(name=== "Clouds"){
      return <img src={cloudy} alt="cloudy"/>
    }
    else if(name==="Rain"){
      return <img src={rain} alt="rain"/>
    }
  }
  renderWeather(){
     const datalist=this.props.data.list.map((day,index)=>{
       //set values to display for each day
        let date= day.dt;
        let temp=Math.round(day.temp.day);
        let min=Math.round(day.temp.min);
        let weather=day.weather[0].main
        date =new Date(date*1000).toUTCString();
        let month=date.split(' ')[2];
        let dayNum=date.split(' ')[1];
        //for today
        if(index===0){
          let desc=day.weather[0].description
          desc=_.startCase(desc)
          return(
            <div id="today" key={index}>
              <div id="today-temp">{temp}&#176;</div>
              <div id="today-other">
                <div id="temp"> F</div>
                {desc}<br/>  {day.humidity} % Humitity
              </div>
              <div id="linebreak"></div>
            </div>
          )
        }
        else{
          return(
            <div className="day" key={index}>
              {month} {dayNum}<br/> {this.getWeatherImg(weather)}<br/> {temp} <br/>{min}
            </div>
          )
        }
     })
     return datalist
  }

  render(){


    const {error, isLoaded, submitted} = this.props;
    //check if user has searched
    if (!submitted){
        return (<h1> Welcome to the weather App. Please seach for a city</h1>)
    }
    else{
      //check if there is an error
      if (error!==""){
        return <div> Error: {error.message}</div>;
      }
      //check if loaded
      else if(isLoaded){
        return <div> Loading... </div>;
      }
      //display weather
      else{
        return(
          <div id="Weather">
            {this.renderWeather()}
          </div>
        )
      }
    //end of first else
    }
  }
}
