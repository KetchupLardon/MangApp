import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from '../components/Card';
import {colors} from '../utils/colors';
import {IMangaData} from '../interfaces/IMangaDex';

export const List = ({mangaList}: {mangaList: IMangaData[]}) => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {mangaList.map((manga, i) => {
          return <Card key={`card_list_${i}`} manga={manga} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
