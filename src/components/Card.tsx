import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IMangaData} from '../interfaces/IMangaDex';
import {MangaDex} from '../api/MangaDex';
import {fontSizes} from '../utils/size';

export const Card = ({manga}: {manga: IMangaData}) => {
  const [mangaCover, setMangaCover] = useState<string>('');
  const {id, relationships, attributes} = manga;

  useEffect(() => {
    const mangas = new MangaDex();
    const cover = relationships.find(r => r.type === 'cover_art');
    const fileName = cover?.attributes?.fileName;
    if (fileName) {
      setMangaCover(mangas.coverUrl(id, fileName));
    }
  }, [id, relationships]);

  console.log('aaaa', mangaCover);
  return (
    <View style={styles.cardContainer}>
      {mangaCover ? (
        <Image style={styles.cover} source={{uri: mangaCover}} />
      ) : null}
      <Text style={styles.text}>{attributes.title.en}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 95,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  cover: {
    width: 81,
    height: 102,
    borderRadius: 5,
  },
  text: {
    fontSize: fontSizes.md,
    fontWeight: '700',
  },
});
