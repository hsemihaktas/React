'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Hello World!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Button'
    );
  }
}

const domContainer = document.querySelector('#button');
ReactDOM.render(e(LikeButton), domContainer);