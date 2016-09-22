import React, { Component, PropTypes } from 'react';

import { dataToString, formatPhone } from '../../shared/tools/data.helper';
import ListItem from '../../shared/components/list-item';
import Avatar from '../../shared/components/avatar';
import Menu from '../../shared/components/menu';

export const userPropTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  address: PropTypes.string,
  city: PropTypes.string,
  phone: PropTypes.string
};

const menu = ({id, handleUpdate, handleDelete}) => (
  <Menu items={[
    {
      label: 'Edit',
      handler: handleUpdate.bind(null, id)
    },
    {
      label: 'Delete',
      handler: handleDelete.bind(null, id)
    }
  ]} />
);

const avatar = name => (
  <Avatar>{ name[0] }</Avatar>
);

const text = data => (
  <p>{ dataToString(data) }</p>
);

export default class UsersListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.shape(userPropTypes).isRequired,
    handleUpdate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  };

  render() {
    const {
      id,
      handleUpdate,
      handleDelete,
      item: { name, birthday, address, city, phone }
    } = this.props;

    return (
      <ListItem
        disabled={true}
        rightIconButton={menu({id, handleUpdate, handleDelete})}
        leftAvatar={avatar(name)}
        primaryText={name}
        secondaryTextLines={2}
        secondaryText={text([birthday, formatPhone(phone), city, address])}
      />
    );
  }
}
