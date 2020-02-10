import React, { useState, useEffect } from 'react';
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
import { colors } from '../../theme/theme';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import Spacing from '../../components/common/Spacing/Spacing';
import Input from '../../components/common/Input/Input';
import { Icon } from 'react-native-elements'

import styles from './styles';

const SearchHistory = ({ componentId }) => {
	const [state, setState] = useState({
		currentHistory: []
	})

	async function getHistory() {
		const searchHistory = JSON.parse(await AsyncStorage.getItem('@SearchHistory'));
		
		if(searchHistory !== null){
			setState({ currentHistory: searchHistory });
		}
	}

	useEffect(() => {
   getHistory();
	}, []);

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
						Search History
					</Text>
					<Spacing size="small" />
					<Text>
						This is your search history in the app (we don't support private browsing so watch yourself 😏)
					</Text>
					<Spacing size="small" />
				</View>
			</View>
				<View style={styles.bottomContent}>
				<View style={styles.bottomContentContainer}>
					<ScrollView>
					{ state.currentHistory.length ? (
						state.currentHistory.map((item, index) => (
							<TouchableOpacity key={index} style={styles.listItem}>
								<Text style={styles.resultText}>
									{ item }
								</Text>
								<Icon
									name='angle-right'
									type="font-awesome"
									size={20}
									color="rgba(0, 0, 0, .6)"
								/>
							</TouchableOpacity>
								))
						) : (
						<View style={styles.emptyState}>
							<Text style={{ color: '#ccc' }}>Nothing yet...</Text>
						</View>
						) }
					</ScrollView>
				</View>
			</View>
		</View>
  );
};

export default SearchHistory;
