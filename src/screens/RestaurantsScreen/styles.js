import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';
import { isIPhoneX, responsiveSize } from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContent: {
    flex: 3,
    position: 'relative',
    paddingTop: responsiveSize(20),
    paddingHorizontal: responsiveSize(20)
  },
  bottomContent: {
    flex: 5,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  emptyState: {
    marginTop: responsiveSize(200),
    alignSelf: 'center'
  },
  bottomContentContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    flex: 1,
    shadowOffset: { x: 0, y: 0 },
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowRadius: 10,
    paddingTop: isIPhoneX() ? responsiveSize(22) : responsiveSize(14),
  },
  menuIcon: {
    marginTop: responsiveSize(25),
    alignSelf: 'flex-end'
  },
  inputHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveSize(20),
    backgroundColor: colors.white,
    borderRadius: responsiveSize(4),
    padding: responsiveSize(10),
    shadowOffset: { height: 4, width: 0 },
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowRadius: 10,
  },
  searchBtn: {
    padding: responsiveSize(8),
    marginHorizontal: responsiveSize(10),
    backgroundColor: colors.primaryColor,
    borderRadius: 3
  },
  inputStyles: {
    backgroundColor: colors.white
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default styles;
