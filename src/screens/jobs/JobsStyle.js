import {StyleSheet} from 'react-native';

export default JobsStyle = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 4,
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
    padding: 6,
    alignContent: 'center',
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 2,
  },
  tableContainer: {
    margin: 4,
    backgroundColor: '#fff',
  },
  tableBorderStyle: {
    borderWidth: 1,
    borderColor: '#000',
  },
  tableTextTitle: {
    margin: 4,
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  tableText: {
    backgroundColor: '#F0000F',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto-Regular',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    fontFamily: 'Roboto-Bold',
  },
  textContainerr: {
    width: '60%',
    alignSelf: 'center',
    marginTop: 40,
    borderColor: '#000',
    borderWidth: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: {
    flexDirection: 'row',
    padding: 6,
    alignItems: 'center',
  },
  viewStyle: {
    width: '20%',
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    width: '80%',
    height: 40,
  },
  TextInput: {
    height: 40,
    flex: 1,
    padding: 10,
  },
  map: {
    margin: 6,
    height: 180,
  },
  mapText: {
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dataContainor: {
    flexDirection: 'row',
    marginHorizontal: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  emptyRedBand: {
    width: 24,
    backgroundColor: '#FF0000',
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
  },
  insideContainor: {
    paddingHorizontal: 6,
    flex: 1,
  },
  yellowBgText: {
    flexWrap: 1,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF00',
  },
  titleText: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontFamily: 'Roboto-Bold',
  },
  descriptionBox: {
    borderRadius: 4,
    marginHorizontal: 6,
    marginBottom: 20,
    marginTop: 4,
    height: 80,
    borderWidth: 1.4,
  },
  statusContainor: {
    margin: 6,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textTitle: {
    flexWrap: 1,
    fontFamily: 'Roboto-Bold',
    alignItems: 'center',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#FFF',
    padding: 6,
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 2,
  },
});