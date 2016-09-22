import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

export default class Modal extends Component {
  render() {
    const { children, open, actions, handleCancel } = this.props;

    return (
      <Dialog
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleCancel}
        autoScrollBodyContent={true}
      >
        { children }
      </Dialog>
    );
  }
}
