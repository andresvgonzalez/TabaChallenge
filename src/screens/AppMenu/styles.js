import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';
import { responsiveSize } from '../../utils/dimensions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, .1)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	whiteBox: {
		backgroundColor: colors.white,
		paddingVertical: responsiveSize(40),
		paddingHorizontal: responsiveSize(100),
		borderRadius: responsiveSize(6),
	},
	menuItem: {
		paddingVertical: responsiveSize(14),
		alignItems: 'center'
	},
	menuItemText: {
		fontWeight: 'bold'
	}
});

export default styles;