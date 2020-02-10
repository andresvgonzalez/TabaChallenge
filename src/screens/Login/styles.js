import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';
import { responsiveSize } from '../../utils/dimensions';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.primaryColor,
		flex: 1,
		justifyContent: 'center'
	},
	whiteBox: {
		backgroundColor: colors.white,
		borderRadius: responsiveSize(4),
		paddingHorizontal: responsiveSize(40),
		paddingVertical: responsiveSize(30),
		width: '80%',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	boxTitle: {
		textAlign: 'center',
		fontWeight: 'bold',
		width: '100%'
	},
	bottomText: {
		textAlign: 'center'
	}
});

export default styles;
