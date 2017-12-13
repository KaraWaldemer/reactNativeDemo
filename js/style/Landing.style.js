import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  landingWindow: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  demoButtonView: {
    flex: 1,
  },
  demoButton: {
    backgroundColor: '#5b83c2',
    borderColor: '#5b83c2',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    height: 36,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  welcomeView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 15,
  },
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000000',
  },
})
