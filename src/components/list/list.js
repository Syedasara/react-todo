import React from 'react';
import "./list.css";
// import "../../App.css";
import Button from './button/button';

class List extends React.Component {

    render() {
        return (
            <div>
               {this.props.edit === true ?
                    ( <div>
                       <form 
                       className="flex"
                       onSubmit={(e) =>  e.preventDefault()}>
                        <input
                         type="text"
                         onChange={this.props.onHandle}
                         placeholder={this.props.cret.text}
                         value={this.props.term}
                         className="bar"
                         />
                        <Button
                           className="grey"
                         onClick={()=>this.props.onUpdate(this.props.term)}
                        // onClick={()=>console.log(this.props.term)}
                        >          
                        Update
                        </Button>
                      </form>
                       {this.props.list.map(item => {
                        return <div >
                            {item.text !== "" ? 
                              <div className="flex">
                                <li>
                                  <span> {item.text} </span>
                                 < Button
                                   className="red"
                                   onClick={() => this.props.onDismiss(item.key)}
                                  //  type="button" 
                                  >
                                   DELETE
                                 </Button>
                                 <Button
                                  className="yellow"
                                   onClick={()=>this.props.onEdit(item.key)}
                                  //  type="button"
                                   >
                                   EDIT
                                 </Button>
                                 </li>
                             </div>
                             :null}
                        </div>
                       })}
                    </div>
                     ):(
                          <div>
                             {this.props.list.map(item => {
                                return <div>
                                 
                                       {item.text !== "" ? 
                                      <div  >
                                         <li>
                                         <span> {item.text}</span> 
                                         < Button
                                          className="red"
                                           onClick={() => this.props.onDismiss(item.key)}
                                          //  type="button" 
                                          >
                                           DELETE
                                         </Button>
                                         <Button
                                           className="yellow"
                                           onClick={()=>this.props.onEdit(item.key)}
                                          //  type="button" 
                                          >
                                           EDIT
                                         </Button>
                                         </li>
                                     </div>
                                     :null}
                                </div>
            })}
            </div>)
         }
                  
             </div>
        )
    }
}
export default List