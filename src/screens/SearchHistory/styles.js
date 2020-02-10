import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';
import { isIPhoneX, responsiveSize } from '../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContent: {
    flex: 2,
    position: 'relative',
    paddingTop: responsiveSize(20),
    paddingHorizontal: responsiveSize(20)
  },
  bottomContent: {
    flex: 6,
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
  },
  menuIcon: {
    marginTop: responsiveSize(25),
    alignSelf: 'flex-end'
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 14,
    fontWeight: '500',
  },
  listItem: {
    paddingVertical: responsiveSize(20),
    paddingHorizontal: responsiveSize(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .1)'
  }
});

export default styles;
