import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 40,
    fontFamily: 'Poppins_400Regular',
  },

  titleBolder: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  button: {
    height: 150,
    width: '48%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },

  totalConnection: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
})

export default styles
