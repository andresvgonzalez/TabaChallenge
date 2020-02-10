import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './styles';

const RestaurantCard = ({ restaurant }) => {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
	          style={styles.imageStyle}
	          source={{ uri: restaurant.image_url }}
	        />
				</View>
				<View style={styles.restaurantInfo}>
					<Text style={styles.restaurantName}>{ restaurant.name }</Text>
					<Text style={styles.restaurantDescription}>{ restaurant.address } {"\n"}{ restaurant.area }</Text>
					<Text>{ restaurant.city }, { restaurant.state }</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default RestaurantCard;
