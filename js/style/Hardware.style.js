import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  hardwareWindow: {
    flex: 1,
    margin: 20,
  },
  gpsView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imageView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  contentStyle: {
    fontSize: 16,
    marginBottom: 2,
  },
  imageStyle: {
    flex: 1,
    alignSelf: 'center',
    width: 200,
    height: 100,
  },
  buttonStyle: {
    backgroundColor: '#5b83c2',
    borderColor: '#5b83c2',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 36,
    paddingLeft: 16,
    paddingRight: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
})
