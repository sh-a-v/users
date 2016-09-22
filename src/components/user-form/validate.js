export default function validate(values) {
  const errors = {};
  const requiredFields = [
    'name',
    'd',
    'm',
    'y'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });

  if (values.name && values.name.length > 100) {
    errors.name = 'Must be 100 characters or less'
  }

  return errors;
};
