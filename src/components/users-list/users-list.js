import React, { Component, PropTypes } from 'react';

import List from '../../shared/components/list';
import Divider from '../../shared/components/divider';
import UsersListItem, { userPropTypes } from '../users-list-item';

const divider = (i, length) => i < length - 1 && <Divider />;

export default class UsersList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(userPropTypes)),
    handleUpdate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  };

  render() {
    const { items=[], handleUpdate, handleDelete } = this.props;

    return (
      <List>
        { items.map((item, i) => (
          <div key={i}>
            <UsersListItem
              id={i}
              item={item}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
            { divider(i, items.length) }
          </div>
        ))}
      </List>
    );
  }
}
