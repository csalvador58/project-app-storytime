import { Image, StyleSheet, Text, View } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import Icons from '../../icons';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#EFE9E7',
          tabBarInactiveTintColor: '#607B7D',
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopColor: '#000000',
            borderTopWidth: 4,
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Icons.HomeIcon size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Icons.BookmarkIcon size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Icons.CreateIcon size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Icons.ProfileIcon size={25} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
});
