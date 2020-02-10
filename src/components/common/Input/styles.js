import { StyleSheet } from 'react-native';
import { responsiveSize } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    height: responsiveSize(40),
    borderRadius: responsiveSize(6),
    backgroundColor: 'rgba(0,0,0,.04)',
    position: 'relative',
    zIndex: 10,
  },
  inputStyle: {
    position: 'relative',
    height: responsiveSize(40),
    width: '100%',
    zIndex: 10,
    padding: 0,
    paddingLeft: responsiveSize(20),
    margin: 0,
    borderWidth: 0,
  },
});

export default styles;
