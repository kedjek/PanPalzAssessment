import { AppRegistry } from 'react-native';
// import App from './Auth';
import Home from './Home';
import TermsAndConditions from './src/screens/TermsAndConditions';
// AppRegistry.registerComponent('panPalz', () => App);

import { UserProvider } from './src/data/UserContext';

// Create a wrapper component that provides the required props
const TermsAndConditionsWrapper = () => {
  const mockNavigation = {
    navigate: (screen) => console.log(`Navigate to: ${screen}`),
    goBack: () => console.log('Go back')
  };

  return (
    <UserProvider>
      <TermsAndConditions 
        navigation={mockNavigation}
        route={{}}
      />
    </UserProvider>
  );
};

AppRegistry.registerComponent('panPalz', () => TermsAndConditionsWrapper);

AppRegistry.runApplication('panPalz', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
