import {StyleSheet} from 'react-native';

export default LoadsStyle = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 4,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 6,
    alignItems: 'center',
  },
  rowEndContainer: {
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'flex-end',
  },
  textContainer: {
    width: '22%',
    backgroundColor: '#FFF',
    fontFamily: 'Roboto-Bold',
    color: '#000',
    padding: 6,
    textAlign: 'center',
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 2,
  },
  button: {
    width: '80%',
    borderRadius: 6,
    height: 50,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});
