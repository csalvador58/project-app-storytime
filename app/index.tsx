import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hero from '../components/Hero';

const RootLayout = () => {
  return (
    <View style={styles.backgroundContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require('../assets/images/logo.png')}
          style={styles.imageBackground}
          resizeMode='repeat'
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <Image
                source={require('../assets/images/logo_dark.png')}
                style={styles.titleLogoImage}
                resizeMode='contain'
              />
            <View style={styles.heroContainer}>
              <Hero />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  safeArea: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  titleLogoImage: {
    width: '100%',
    height: '50%',
  },
  heroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
