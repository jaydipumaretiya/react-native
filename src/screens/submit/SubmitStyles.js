import {StyleSheet} from 'react-native';

export default SubmitStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#C6D3DB',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
    fontFamily: 'Roboto-Bold',
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
  textBigInput: {
    height: 100,
    textAlign: 'auto',
    fontFamily: 'Roboto-Regular',
  },
  textCenter: {
    textAlign: 'center',
  },
  textNext: {
    borderColor: '#000',
    borderWidth: 1,
    fontFamily: 'Roboto-Bold',
    color: '#000',
    flexGrow: 1,
    marginTop: 20,
    padding: 8,
    textAlign: 'center',
  },
  dialogContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  dialogSuccessContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  clearButtonContainer: {
    paddingHorizontal: 26,
    paddingVertical: 10,
    marginEnd: 20,
    backgroundColor: '#EAEAEA',
    fontFamily: 'Roboto-Bold',
    color: '#000',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  okButtonContainer: {
    paddingHorizontal: 26,
    paddingVertical: 10,
    backgroundColor: '#00ff00',
    fontFamily: 'Roboto-Bold',
    color: '#000',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSuccess: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    marginBottom: 20,
  },
});
