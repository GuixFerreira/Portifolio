import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Image, Pressable} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const urlToMyGitHub = 'https://github.com/GuixFerreira';
const imageProfile = 'https://avatars.githubusercontent.com/u/104866760?s=400&u=e1f4e40d8a3633154ed2cc884740b81c83365dca&v=4';

const App = () => {
  const handlePressGoGitHub = async() => {
    console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlToMyGitHub);
    if (res) {
      await Linking.openURL(urlToMyGitHub);
      console.log('Link Aprovado');
      console.log('Abrindo Link...');
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle='light-content'/>
     <View style={style.content}>
        <Image 
        accessibilityLabel="Foto de Guilherme"
        style={style.avatar}
        source={{uri: imageProfile}}
        />
        <Text accessibilityLabel="Nome: Guilherme Ferreira" style={[style.defaultText, style.name]}>Guilherme Ferreira</Text>
        <Text accessibilityLabel="Nickname: GuixFerreira" style={[style.defaultText, style.nickname]}>GuixFerreira</Text>
        <Text accessibilityLabel="Descrição: Full-Stack Developer Student |" style={[style.defaultText, style.description]}>Full-Stack Developer Student |</Text>
        <Text accessibilityLabel="Descrição: Systems Analysis and Development Student |" style={[style.defaultText, style.description]}>Systems Analysis and Development Student |</Text>
        <Pressable onPress={handlePressGoGitHub}>
          <View style={style.button}>
           <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1,
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',

  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 200,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGitHub,
    justifyContent: 'center',
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold'
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 30,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 10,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default App;


/* Código Padrão
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
