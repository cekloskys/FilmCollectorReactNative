import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const FilmsScreen = props => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add Film')}
                >
                <Text style={styles.buttonText}>Add Film</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default FilmsScreen;