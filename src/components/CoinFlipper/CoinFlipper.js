import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count:0,
      heads:0,
      tails:0,
    };
    
  }
  static defaultProps ={
    faces : ["tura","yazi"],
  }
  handleClick = () => {

    let faces = [...this.props.faces];

    this.setState({ flipping: true });
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.setState({ count: this.state.count + 1 })
    const min = 0;
    const max = 1;

    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({side: faces[rand],flipping:true});
    
    if(faces[rand] === "tura"){
       return this.setState( {heads:this.state.heads + 1 });
    } else if (faces[rand] === "yazi") {
       return this.setState({tails : this.state.tails + 1})
    }
   
    
    
   
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan
          <strong> {this.state.tails} tanesi </strong>yazi
          <strong> {this.state.heads}  tanesi </strong>
          tura geldi
        </p>
       
      </div>
      
    );
  }
}

export default CoinFlipper;
