import React from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import LoginCard from './LoginCard';

export default function EditScreenInfo({ path }: { path: string }) {
  return (

      <ImageBackground source={require('../assets/images/splash.png')} style={{width: '100%', height: '100%'}} blurRadius={5}>
            <View style={styles.LoginCard}>
              <LoginCard/>
            </View>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)">
          </Text>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  LoginCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,  // Menor margin
    marginVertical: 170,  // Menor margin
    backgroundColor: 'rgba(56, 20, 0, 0.55)',
    borderRadius: 10,
},
});
