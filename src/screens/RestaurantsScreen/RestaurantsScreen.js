import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
	Alert,
	View,
	TouchableOpacity,
	ScrollView,
	Text,
	Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { showModal } from '..';
import { getRestaurantsByCity } from '../../actions/userActions';
import { colors } from '../../theme/theme';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import Spacing from '../../components/common/Spacing/Spacing';
import Input from '../../components/common/Input/Input';
import { Icon } from 'react-native-elements'

import styles from './styles';

const RestaurantsScreen = ({ componentId }) => {

	const { userData, restaurants, isFetching } = useSelector(state => state.user)
	const dispatch = useDispatch();
  
  // component state
  const [screenData, setScreenData] = useState({
    isFetching: false,
    city: null
  })

  // state helper
  const _updateState = (stateKey, value) => {
    setScreenData(prevState => {
      return { ...prevState, [stateKey]: value }
    });
  };

  const _search = () => {
  	if(screenData.city && screenData.city.length > 3){
			dispatch(getRestaurantsByCity(screenData.city))
  	}
  }

  return (
    <View style={styles.container}>
			<View style={styles.topContent}>

				<TouchableOpacity style={styles.menuIcon} onPress={() => showModal('appMenu', componentId)}>
					<Icon
						name='bars'
						type="font-awesome"
					/>
				</TouchableOpacity>

				<View>
					<Spacing size="large" />
					<Text style={styles.mainTitle}>
						Welcome again, {userData.fullName}
					</Text>
					<Spacing size="small" />
					<Text>
						Search for restaurants close to your city using the input below
					</Text>
					<Spacing size="small" />
					<View style={styles.inputHolder}>
						<Input
                placeholder="Enter a city name"
                inputWidth="75%"
                onChangeText={text => _updateState('city', text)}
                customStyles={styles.inputStyles}
            />
            <TouchableOpacity disabled={screenData.isFetching} style={styles.searchBtn} onPress={() => _search()}>
            	<Text style={{ color: 'white' }}>
            		Search
							</Text>
            </TouchableOpacity>
					</View>
					<Spacing size="medium" />
					<TouchableOpacity>
						<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Tap here to use your current location</Text>
					</TouchableOpacity>
				</View>
			</View>
				<View style={styles.bottomContent}>
				<View style={styles.bottomContentContainer}>
						<ScrollView>
						{ restaurants.length > 0 ? (
							<Fragment>
								{restaurants.map((item, index) => <RestaurantCard key={item.id} restaurant={item} /> )}
							</Fragment>
							) : (
							<View style={styles.emptyState}>
								<Text style={{ color: '#ccc' }}> { isFetching ? 'Loading...' : "Nothing yet..."}</Text>
							</View>
							) }
							<Spacing size="medium" />
						</ScrollView>
				</View>
			</View>
		</View>
  );
};

export default RestaurantsScreen;
