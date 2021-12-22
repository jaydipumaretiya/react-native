import {StyleSheet} from 'react-native';

export default MorningCheckStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  tableContainer: {
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    padding: 6,
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'flex-end',
  },
  textStyle: {
    backgroundColor: '#FFF',
    padding: 6,
    borderWidth: 1,
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    backgroundColor: '#F0000F',
    margin: 4,
    flexBasis: '6%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    flex: 4,
  },
  textInput: {
    height: 40,
    flex: 1,
    fontFamily: 'Roboto-Regular',
    padding: 10,
  },
  inputView2: {
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    flex: 1,
  },
  viewFlex: {
    flex: 1,
  },
  checkBoxed: {
    marginStart: 4,
    flex: 1,
  },
  buttonText: {
    padding: 6,
    marginStart: 4,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
  },
  dialogContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okButton: {
    padding: 10,
    backgroundColor: '#00ff00',
    color: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSuccess: {
    fontFamily : 'Roboto-Medium',
    fontSize : 30,
    marginBottom: 30,
  },
});
