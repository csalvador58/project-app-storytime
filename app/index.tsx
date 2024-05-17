import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Raleway-Black', fontSize: 30 }}>
        Root Layout
      </Text>
      <Link href='/profile' style={{ color: 'blue', fontFamily: 'Raleway-Light', fontSize: 20 }}>
        Go to Profile
      </Link>
      <StatusBar style='auto' />
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
