import { AppRegistry } from 'react-native';
import Home from './Home';
import { UserProvider } from './src/data/UserContext';

// Create a wrapper component that provides the required props
const TermsAndConditionsWrapper = () => {

  return (
    <UserProvider>
      <Home/>
    </UserProvider>
  );
};

AppRegistry.registerComponent('panPalz', () => TermsAndConditionsWrapper);

AppRegistry.runApplication('panPalz', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
