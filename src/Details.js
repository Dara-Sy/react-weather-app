import React, {Component} from 'react';

class Details extends Component {
  render(props) {
    return (
      <div className="detailcontainer">
        <div>
          <h3> Humidity</h3>
          <p> {this.props.humidity} </p>
        </div>
        <div>
          <h3> Windspeed</h3>
          <p> {this.props.windspeed} </p>
        </div>
        <div>
          <h3> Country</h3>
          <p> {this.props.country} </p>

        </div>
        <div>
          <h3> Description</h3>
          <p> {this.props.description} </p>
        </div>
      </div>


      )
  }
}



export default Details;


// function Details(props) {
//   render(){
//     return(
//         <div> hi
//         </div>
//       )
//   }
// }
