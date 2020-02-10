import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TouchableOpacity } from 'react-native';
import { setNewRoot, goToPage } from '..';

// styles
import styles from './styles';

const AppMenu = ({ componentId }) => {

  const _logout = async() => {
    await AsyncStorage.setItem('@UserSessionStatus', 'inactive').then(() => setNewRoot(componentId, 'initializing'));
  }

  return (
      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.whiteBox}>
            <TouchableOpacity style={styles.menuItem} onPress={() => setNewRoot(componentId, 'restaurantsScreen')}>
              <Text style={styles.menuItemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setNewRoot(componentId, 'searchHistory')}>
              <Text style={styles.menuItemText}>Search History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => _logout()}>
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
  );
};

export default AppMenu;
