import { Image, StyleSheet } from 'react-native';

const Hero = () => {
  return (
    <Image
      source={require('../assets/images/hero_square.png')}
      style={styles.heroImage}
      resizeMode='contain'
    />
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroImage: {
    width: '100%',
    height: '100%',
  },
});
