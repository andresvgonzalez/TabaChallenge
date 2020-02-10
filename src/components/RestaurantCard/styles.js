import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../utils/dimensions';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: responsiveSize(20),
		marginVertical: responsiveSize(10),
		shadowOffset: {
			width: responsiveSize(0),
			height: responsiveSize(4),
		},
		shadowColor: 'black',
		shadowOpacity: 0.08,
		shadowRadius: responsiveSize(6),
		padding: responsiveSize(20)
	},
	imageStyle: {
		width: responsiveSize(120),
		height: responsiveSize(80),
		borderRadius: responsiveSize(4)
	},
	restaurantName: {
		fontWeight: 'bold'
	},
	restaurantDescription: {
		color: 'gray',
		marginVertical: responsiveSize(6)
	},
	restaurantInfo: {
		width: '70%',
		marginLeft: responsiveSize(10),
	}
});

export default styles;
