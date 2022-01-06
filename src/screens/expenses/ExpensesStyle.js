import {StyleSheet} from 'react-native';

export default ExpensesStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#C6D3DB',
  },
  title: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
    fontFamily: 'Roboto-Medium',
  },
  box: {
    flexDirection: 'row',
    padding: 8,
    marginTop: 8,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    borderColor: '#000',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: 'Roboto-Regular',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    margin: 6,
    flex: 1,
    flexDirection: 'column',
  },
  viewIcons: {
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
  },
  icon: {
    resizeMode: 'center',
    height: 70,
  },
  smallIcon: {
  },
  dateTimeText: {
    flex: 1,
  }
});
