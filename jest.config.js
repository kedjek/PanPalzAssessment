module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
  },
  setupFiles: ['./jest.setup.js'],
};
