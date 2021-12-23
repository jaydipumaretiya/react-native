import {StyleSheet} from 'react-native';

export default ExpensesStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
    fontFamily: 'Roboto-Medium',
  },
  box: {
    padding: 8,
    marginTop: 8,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    borderColor: '#000',
    borderWidth: 0.5,
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
});
