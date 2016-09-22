import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { grey400 } from 'material-ui/styles/colors';

const style = {
  position: 'fixed',
  right: '50px',
  bottom: '50px'
};

export default class AddButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { onClick } = this.props;

    return (
      <FloatingActionButton backgroundColor={grey400} style={style} onClick={onClick}>
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}
