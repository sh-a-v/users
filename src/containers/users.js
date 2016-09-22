import React, { Component } from 'react';
import { connect } from 'react-redux';

import { normalizeForStorage } from '../shared/tools/data.helper';
import { openForm, closeForm, create, update, del } from '../actions/users.actions';
import AddButton from '../shared/components/buttons/add-button';
import UsersList from '../components/users-list';
import UserForm from '../components/user-form';

class Users extends Component {
  constructor(props) {
    super(props);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCreate() {
    this.props.dispatch(openForm());
  }

  handleUpdate(id) {
    this.props.dispatch(openForm(id));
  }

  handleDelete(id) {
    this.props.dispatch(del(id));
  }

  handleSubmit(data) {
    data = normalizeForStorage(data);

    const { dispatch, users : { editableItemId } } = this.props;

    dispatch(editableItemId ? update(editableItemId, data) : create(data));

    this.handleCancel();
  }

  handleCancel() {
    this.props.dispatch(closeForm());
  }

  render() {
    const { users: { items, formOpen } } = this.props;

    return (
      <div>
        <UsersList
          items={items}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
        { formOpen &&
          <UserForm
            open={formOpen}
            onSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
          />
        }
        <AddButton onClick={this.handleCreate} />
      </div>
    );
  }
}

export default connect(state => ({
  users: state.users
}))(Users);
