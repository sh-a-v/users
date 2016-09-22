import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';
import range from 'lodash/range';
import {
  SelectField
} from 'redux-form-material-ui';

import './form.css';

export {
  TextField,
  SelectField
} from 'redux-form-material-ui';

export const selectNumber = (name, start, end, step) => (
  <div className="form-select-number">
    <Field
      name={name}
      hintText={name}
      floatingLabelText={name}
      component={SelectField}
      maxHeight={200}
      fullWidth={true}
      autoWidth={false}
    >
      { range(start, end, step).map((n, i) => {
        let value = `${n}`.length > 1 ? `${n}` : `0${n}`;
        return <MenuItem value={value} primaryText={value} key={i} />;
      })}
    </Field>
  </div>
);

export const buttons = ({ handleCancel, handleSubmit }) => (
  <div className="form-buttons">
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleCancel}
    />
    <FlatButton
      label="Submit"
      primary={true}
      onTouchTap={handleSubmit}
    />
  </div>
);
