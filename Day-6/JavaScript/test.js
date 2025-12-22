let user = {
  department: 'Sales',
  address: {city: 'Chicago',state: 'IL'}
};
const { address, address: { city }, address: { state } } = user;
console.log(address);
console.log(city);
console.log(state);