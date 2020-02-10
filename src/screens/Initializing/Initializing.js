import React, { Component } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  ActivityIndicator,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { getUserData } from '../../actions/userActions';
import { initApp, setNewRoot } from '../../screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

class Initializing extends Component {

  constructor(props){
    super(props);
  }

  static async initAppInHome({ getUserDataConnected }) {
    
    try {
      // getting user data from local storage
      getUserDataConnected().then(() => initApp('restaurantsScreen'))
    } catch (error) {
      initApp('login');
    }
  }

  async componentDidMount() {
    // session status
    const userSessionStatus = await AsyncStorage.getItem('@UserSessionStatus')
    
    // initialize search history for the first time
    if(!await AsyncStorage.getItem('@SearchHistory')){
      await AsyncStorage.setItem('@SearchHistory', JSON.stringify([]));
    }

    try {
      if(userSessionStatus !== 'active') {
        initApp('login');
      } else {
        Initializing.initAppInHome(this.props);
      }
    } catch (err) {
      initApp('login');
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="black" />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserDataConnected: getUserData,
    },
    dispatch
  );
}

function mapStateToProps(store) {
  return {
    user: store.user
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Initializing)
);
