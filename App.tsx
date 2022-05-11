import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MangaDex} from './src/api/MangaDex';
import {Home} from './src/screens/Home';
import {List} from './src/screens/List';
import {Favorites} from './src/screens/Favorites';
import {ListSVG} from './src/assets/ListSVG';
import {FavoritesSVG} from './src/assets/FavoritesSVG';
import {HomeSVG} from './src/assets/HomeSVG';
import {colors} from './src/utils/colors';

const Tab = createBottomTabNavigator();

const App = () => {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    const mangas = new MangaDex();
    mangas.fetchMangaList().then(json => setMangaList(json.data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: '10%',
              backgroundColor: colors.darkerPurple,
            },
          }}>
          <Tab.Screen
            name="List"
            children={() => <List mangaList={mangaList} />}
            options={{
              tabBarIcon: () => <ListSVG />,
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <HomeSVG />,
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
              tabBarIcon: () => <FavoritesSVG />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
});

export default App;
