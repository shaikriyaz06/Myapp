import React, { Component } from 'react'
// class Hello extends Component {
//     constructor(props){
//         super(props)
//     }
//   render() {
//       console.log(this.props)
    // return (
    //     <div>
    //         <h1>Hello</h1>
    //         {this.props.pr}
    //     </div>
    // )
//   }
// }
// import React from 'react';

 function Hello(props) {
     console.log(props)
    return (
        <div>
            <h1>Hello</h1>
            {props.children}
        </div>
    );
    
}

export default Hello
