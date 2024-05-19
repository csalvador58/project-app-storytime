import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('../assets/images/logo.png')}
      style={{ width: '100%', height: '100%' }}
      resizeMode='repeat'
    />
  );
};

export default Logo;
