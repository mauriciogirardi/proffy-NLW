import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257e5',
    padding: 30,
  },
  topBar: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  title: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 25,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default styles
