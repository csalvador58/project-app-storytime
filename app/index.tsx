import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
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
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.viewContainer}>
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
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
