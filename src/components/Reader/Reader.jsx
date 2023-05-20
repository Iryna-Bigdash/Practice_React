import React, { Component } from 'react';
import { Controls } from './Controls/Controls';
import { Progress } from './Progress/Progress';
import { Publication } from "./Publication/Publication";
import { Wrapper } from "./Reader.styled";

const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    index: 0,
  }

  componentDidMount(){
const savedState = localStorage.getItem(LS_KEY);
if(savedState){
  this.setState( {index: Number(savedState) });
}
  }

componentDidUpdate(prevProps, prevState){
if(prevState.index !== this.state.index){
  localStorage.setItem(LS_KEY, this.state.index);
}
}


changeIndex = (value) => {
  this.setState(state => ({index: state.index + value}));
}

  render() {
    const {index} = this.state;
    const {items} = this.props;
    const totalItems = items.length;
    // console.log(items[index]);
    const currentItem = items[index];

    return (
      <Wrapper>
       <Publication item={currentItem} />
       <Progress 
       currentPage={index + 1}
       totalPages={totalItems}
       />
       <Controls 
       onChange={this.changeIndex}
       currentItem={index+1}
       total={totalItems}
       />
      </Wrapper>
    )
  }
}
