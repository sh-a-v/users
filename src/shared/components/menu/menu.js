import React, { Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400 } from 'material-ui/styles/colors';

const style = {
  position: 'absolute',
  top: '4px',
  right: '0'
};

export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      handler: PropTypes.func
    })).isRequired
  };

  render() {
    const { items } = this.props;

    return (
      <IconMenu
        style={style}
        iconButtonElement={<IconButton touch={true}><MoreVertIcon color={grey400} /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        { items.map((item, i) => <MenuItem primaryText={item.label} onTouchTap={item.handler} key={i} />) }
      </IconMenu>
    );
  }
}
