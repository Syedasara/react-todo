import React from 'react';
// import "../list.css";
import "./button.css";

class Button extends React.Component{
    render(){
        return(
            <div className="btn"> 
                <button
                   className={this.props.className}
                   onClick={()=>this.props.onClick(this.props.value)}
                   type="button">
                   {this.props.children}
                   
                </button>
            </div>
        )
    }
}
export default Button