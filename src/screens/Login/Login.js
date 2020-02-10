import React, { useState, Fragment } from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { setNewRoot } from '..';
import AsyncStorage from '@react-native-community/async-storage';
import Input from '../../components/common/Input/Input';
import Spacing from '../../components/common/Spacing/Spacing';
import Button from '../../components/common/Button/Button';

// styles
import styles from './styles';

const Login = ({ componentId }) => {
  
  // component State
  const [userData, setUserData] = useState({
    fullName: '',
    userEmail: '',
    userPassword: '',
    form: 'login'
  })

  // state helper
  const _updateState = (stateKey, value) => {
    setUserData(prevState => {
      return { ...prevState, [stateKey]: value }
    });
  };

  // signup and login function
  const _userIdentification = async () => {
    if(userData.form == 'login'){
      // fileds filled ?
      if(userData.userEmail && userData.userPassword) {
        const registeredUser = await AsyncStorage.getItem('@UserData');
        if(registeredUser !== null) {
          // getting registered user credentials
          const loginEmail = JSON.parse(registeredUser).userEmail;
          const userPassword = JSON.parse(registeredUser).userPassword;
          
          //loggin user in
          if((userData.userEmail === loginEmail) && (userData.userPassword === userPassword))  {
            // setting flag for session
            await AsyncStorage.setItem('@UserSessionStatus', 'active');
            // push initializing screen
            setNewRoot(componentId, 'initializing')
          } else {
            Alert.alert("Error", "Wrong credentials")
          }
        } else {
          Alert.alert("Error", "Please create an account first")
        }
      } else {
        Alert.alert("Error", "Please fill all the fields")
      }
    } else {
      if(userData.fullName && userData.userEmail && userData.userPassword) {
        // setting flag for session
        await AsyncStorage.setItem('@UserSessionStatus', 'active');
        // saving user data and pushing new view
        await AsyncStorage.setItem('@UserData', JSON.stringify(userData)).then(() => {
          setNewRoot(componentId, 'initializing')
        });

      } else {
        Alert.alert("Error", "Please fill all the fields")
      }
    }
  }

  return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={styles.whiteBox}>
          <Text style={styles.boxTitle}>{userData.form === 'login' ? 'Already have an account ?' : 'Create an account'}</Text>
          <Spacing size="medium" />
          {userData.form !== 'login' ? (
            <Fragment>
               <Input
                  placeholder="Full name"
                  onChangeText={text => _updateState('fullName', text)}
                />
                <Spacing size="small" />
            </Fragment>
          ) : null}
          <Input
            placeholder="Email"
            onChangeText={text => _updateState('userEmail', text)}
          />
          <Spacing size="small" />
          <Input
            placeholder="Password"
            onChangeText={text => _updateState('userPassword', text)}
            password
          />
          <Spacing size="medium" />
          <Button
            btnTitle={userData.form === 'login' ? 'Login' : 'Sign up'}
            onPress={_userIdentification}
          />
          <Spacing size="medium" />
          { userData.form === 'login' ? (
            <TouchableOpacity style={{ width: '100%' }} onPress={() => _updateState('form', 'signup')}>
              <Text style={styles.bottomText}>Don't have an account? <Text style={styles.boxTitle}>Sign up</Text> </Text>
            </TouchableOpacity>
           ) : (
            <TouchableOpacity style={{ width: '100%' }} onPress={() => _updateState('form', 'login')}>
              <Text style={styles.bottomText}>Already have an account? <Text style={styles.boxTitle}>Sign up</Text> </Text>
            </TouchableOpacity>
           )}
        </View>
        </KeyboardAvoidingView>
      </View>
  );
};

export default Login;
