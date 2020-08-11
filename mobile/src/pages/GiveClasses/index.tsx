import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'

import bgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

const GiveClasses = () => {
  const {goBack} = useNavigation()

  function handleNavigateBack () {
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
      resizeMode='contain' 
      source={bgImage} 
      style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>

      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>tudo bem</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses