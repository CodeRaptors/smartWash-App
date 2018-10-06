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
       return (
       <ProgressBar>
        <ProgressBar striped bsStyle="success" now={35} key={1} />
        <ProgressBar bsStyle="warning" now={20} key={2} />
        <ProgressBar active bsStyle="danger" now={10} key={3} />
       </ProgressBar>
     );
   }

}

export default status;
