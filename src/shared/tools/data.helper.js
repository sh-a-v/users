export const normalizePhone = phone => phone ? phone.replace(/\D/g, '') : null;

export const formatPhone = phone => {
  if (!phone) return;

  let phoneMask = '+X XXX XXX-XX-XX';

  let nPhone = normalizePhone(phone);
  nPhone.split('').forEach(n => phoneMask = phoneMask.replace('X', n));

  return phoneMask;
};

export const dataToString = data => data.filter(arg => !!arg).join(', ');

export const normalizeForStorage = ({name, d, m, y, city, address, phone}) => {
  return {
    birthday: [d, m, y].join('.'),
    phone: normalizePhone(phone),
    name,
    city,
    address
  }
};

export const normalizeForForm = ({name, birthday, city, address, phone}) => {
  birthday = birthday.split('.');

  return {
    d: birthday[0],
    m: birthday[1],
    y: birthday[2],
    phone: formatPhone(phone),
    name,
    city,
    address
  }
};
