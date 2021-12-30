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
});
