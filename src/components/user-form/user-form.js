import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

import Modal from '../../shared/components/modal';
import {
  TextField,
  selectNumber,
  buttons
} from '../../shared/components/form';
import { normalizeForForm, formatPhone } from '../../shared/tools/data.helper';
import validate from './validate';

const normalizePhone = phone => {
  return phone ? formatPhone(phone).slice(0, phone.length).replace('X', '') : null;
};

const birthday = () => (
  <div>
    { selectNumber('d', 1, 32) }
    { selectNumber('m', 1, 13) }
    { selectNumber('y', 2016, 1929, -1) }
  </div>
);

class UserForm extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
  };

  render() {
    const { open, handleSubmit, handleCancel } = this.props;

    return (
      <Modal open={open} actions={[]} handleCancel={handleCancel}>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="name"
              component={TextField}
              hintText="Иванов Иван Иванович"
              floatingLabelText="Full Name"
              fullWidth={true}
            />
          </div>
          <div>
            <Field
              name="birthday"
              component={TextField}
              floatingLabelText="Birthday"
              disabled={true}
              fullWidth={true}
            />
            <FieldArray name="birthday" component={birthday} />
          </div>
          <div>
            <Field
              name="city"
              component={TextField}
              hintText="Москва"
              floatingLabelText="City"
              fullWidth={true}
            />
          </div>
          <div>
            <Field
              name="address"
              component={TextField}
              hintText="ул. Дмитровская, д.40, кв.12"
              floatingLabelText="Address"
              fullWidth={true}
            />
          </div>
          <div>
            <Field
              name="phone"
              component={TextField}
              hintText="+7 915 123-45-67"
              floatingLabelText="Mobile phone number"
              fullWidth={true}
              normalize={normalizePhone}
            />
          </div>
          { buttons({handleSubmit, handleCancel}) }
        </form>
      </Modal>
    );
  }
}

UserForm = reduxForm({
  form: 'user',
  validate
})(UserForm);

UserForm = connect(state => ({
  initialValues: typeof state.users.editableItemId === 'number' ?
    normalizeForForm(state.users.items[state.users.editableItemId]) :
    null
}))(UserForm);

export default UserForm;
