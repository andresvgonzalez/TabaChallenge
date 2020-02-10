import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
    GET_RESTAURANTS,
    GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_ERROR,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
} from '../constants';

import { apiUrl } from '../config.js';

export const getUserData = (body) => (dispatch) =>
  new Promise( async(resolve, reject) => {
      try {
          // firing actions
          dispatch({ type: GET_USER });
          
          // getting user data
          const userData = await AsyncStorage.getItem('@UserData');

          if(!userData) {
            dispatch({
              type: GET_USER_ERROR,
              error: "error" 
          });
          
          // if there is some error
          reject(userData);

          } else {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: JSON.parse(userData),
            });
            resolve(userData);
          }

      } catch (err) {

          // if something went wrong
          dispatch({
              type: GET_USER_ERROR,
              error: err
          });
          reject(err);
      }
  })

export const getRestaurantsByCity = (city) => (dispatch) =>
  new Promise( async(resolve, reject) => {
      try {
          dispatch({ type: GET_RESTAURANTS });
          
          // getting search history
          let searchHistory = JSON.parse(await AsyncStorage.getItem('@SearchHistory'));
          // adding new item
          searchHistory.unshift(city);
          // updating search history
          await AsyncStorage.setItem('@SearchHistory', JSON.stringify(searchHistory));

          await axios.get(`${apiUrl}/restaurants?city=${city}`)
            .then(function (response) {
              // handle success
               // resolving response
              resolve(response);
              // firing actions
              dispatch({
                  type: GET_RESTAURANTS_SUCCESS,
                  payload: response.data.restaurants,
                  error: null
              });  

            })
            .catch(function (error) {
              // handle error
              dispatch({
                  type: GET_USER_ERROR,
                  error: response.error
              });
            });

      } catch (error) {
          // rejecting promise
          reject(error)
          // if something went wrong
          dispatch({ type: GET_USER_ERROR, error: error });
      }
  })
