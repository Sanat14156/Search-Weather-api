import React, { Component } from 'react'
import Main from './Main';

export default class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state={
            isError:false
        }
    }

    static getDerivedStateFromError(){
        return{isError:true}
    }
    componentDidCatch(err,errinfo){
        console.log(err);
        console.log(errinfo);
    }
  render() {
    if(this.state.isError){
        return<div>
            <h1 className='error'>please enter city</h1>
            <Main></Main>
        </div>
    }
    else{
        return<div>{this.props.children}</div>
    }
  }
}

