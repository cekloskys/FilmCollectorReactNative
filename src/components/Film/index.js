import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const Film = props => {

    const post = props.post;

    const navigation = useNavigation();

    const onPress = () => {
        if (post.actor_id){
            // Add Actor Film screen is using me
            try {
                database.addActorFilms(post.actor_id, post.id);
            } catch (error) {
                console.log('Error adding actor film ' + error);
            }
            alert('Film added to actor!');
            navigation.navigate('Enter FilmCollector!');
        } else {
            // Films screen is using me
            console.log(post.title);
        }
        
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.releaseDate}>{post.releasedate}</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.rating}>{post.rating}</Text>
                <Text style={styles.duration}>{post.duration}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Film;