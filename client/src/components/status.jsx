import React, {Component} from 'react';

class status extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: this.props.defaultText
      }
      this.changeTitle = this.changeTitle.bind(this);
   }

   changeTitle() {
      this.setState({
          title: this.props.changedText
      });
   }

   render() {
       return <div onClick={this.changeTitle}>{this.state.title}</div>;
   }

}

status.defaultProps = {
    defaultText: 'order has been picked up',
    changedText: 'order has been droped off',
     washed: 'your ropa is being washed'
}
export default status;
