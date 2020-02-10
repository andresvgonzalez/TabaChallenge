import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';
import { colors } from '../../../theme/theme.js';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        paddingHorizontal: 10,
        paddingVertical: responsiveSize(14),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 4,
        position: 'relative',
        minHeight: responsiveSize(40)
    },
    btnText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default styles;
