import React from 'react';
import './App.css';
import List from './components/list/list';
import Header from './components/header/header';
import { thisExpression } from '@babel/types';
//import { tsConstructorType } from '@babel/types';

const list = [{key:0 ,
              text:""}];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      edit:false,
      keyword: "",
      term:"",
      cret:[{ key:0,
              text:""}]
      // tag:"",
      // inputElement :React.createRef()
    };
    this.onSet = this.onSet.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onHandle=this.onHandle.bind(this)

  }
  onHandle(event){
    this.setState({
        term: event.target.value
    })
}

  onSet(event) {
    this.setState({
      keyword: event.target.value
    })
  }
  onAdd(value) {

    if(value!==""){
      this.setState({
        list: [...this.state.list ,{key:Date.now(), text:value}],
        keyword: "",
      })
    /* another method for adding a new item*/
      // let list = this.state.list.slice();
      // list.push({key:Date.now(), text:value});
      // this.setState({
      //   list: list,
      //   keyword: "",  
      // });
    }
   
  }
  onEdit(key){ 
    this.setState({
            // tag:cret.text,
            cret:this.state.list.filter(x=> x.key===key),
            edit:true
    })
    // this.onUpdate(key)
  }
  onUpdate(value){
   
    // let cret=this.state.list.find(x=> x.key===key)
    let ind=this.state.list.findIndex(x=> x.key===this.state.cret.key)
    let list=this.state.list.slice();
    list[ind].text=value;
    this.setState({
     list:list,
     edit:false
    // this.setState({
    // updatedList: this.state.list.push(this.state.cret),
  })
}

  onDismiss(key) {
      this.setState({
        list:this.state.list.filter(item => key!==item.key )
    })
  }
  // componentDidUpdate() {
  //   this.state.inputElement.current.focus()
  // }
  render() {
    return (
      <div>
      <Header/>
      <div className="App">
        <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Task"
          // ref={this.state.inputElement}
          type="text"
          value={this.state.keyword}
          onChange={this.onSet}
          className="field"
        />
        <button
         className="add"
        onClick={()=>this.onAdd(this.state.keyword)}
        // value={this.state.keyword} 
        >    
         ADD
        </button>
        </form>
        <List
        term={this.state.term}
        edit={this.state.edit}
        cret={this.state.cret}
        list = {this.state.list}
        onDismiss={this.onDismiss}
        onHandle={this.onHandle}
        onEdit={this.onEdit}
        onUpdate={this.onUpdate}
        />

       {/* <button
       onClick={()=>console.log(this.state.cret)}>
       CRET
       </button>
        */}
        {/* { for (let i of list)
          {
            this.state.list[i] + " "
          }
        } */}
       </div>
      </div>
    );
  }
}
export default App;
