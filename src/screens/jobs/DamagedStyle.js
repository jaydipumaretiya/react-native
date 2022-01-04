import {StyleSheet} from 'react-native';

export default JobsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#C6D3DB',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  rowEndContainer: {
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'flex-end',
  },
  textContainer: {
    width: '22%',
    fontFamily: 'Roboto-Bold',
    color: '#000',
    backgroundColor: '#FFF',
    padding: 6,
    alignContent: 'center',
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 2,
    textAlign: 'center',
  },
  textButton: {
    flex: 1,
    paddingVertical: 10,
    fontFamily: 'Roboto-Bold',
    color: '#000',
    marginHorizontal: 4,
    alignContent: 'center',
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 2,
    textAlign: 'center',
  },
  image: {
    height: 240,
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
  textTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    marginBottom: 10,
  },
  textMessage: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginVertical: 5,
  },
  okButtonContainer: {
    paddingHorizontal: 26,
    paddingVertical: 10,
    backgroundColor: '#00ff00',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Bold',
  },
  textSuccess: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    marginBottom: 30,
  },
});
