import React from 'react';
import  { Feather as Icon} from '@expo/vector-icons';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert, Share } from 'react-native';
import { Roboto_300Light_Italic, Roboto_700Bold } from '@expo-google-fonts/roboto';

const Phrases = () => {

  function sharePrint() {
    onShare();
  }

  // const url = await Expo.takeSnapshotAsync();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Menssagem do Dia",
        // url: Expo.takeSnapshotAsync(),
        message: "Compartilhe com seus amigo mais e mais menssagems como esta em com.StudiosCriar.ZenPhazes",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/Bacground.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>  
          <Image style={styles.picture} source={require('../../assets/picture.png')} />
          <Text style={styles.textPhrases}> “Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver.”</Text>

        <View style={styles.authorContainer}>
          <Text style={styles.textAuthor}>"Dalai Lama"</Text>
        </View>    
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.shareContainer} onPress={sharePrint}>
            <Icon name="share" color="#FFF" size={22} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  picture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 8,
    borderColor: "#FFF8",
    marginTop: 32,
  },

  textPhrases: {
    color: "#FFF",
    fontFamily: "Roboto_300Light_Italic",
    fontSize: 22,
    textAlign: "center",
  },

  authorContainer: {
    width: '100%',
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },

  textAuthor: {
    color:"#FFF",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },

  shareContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height:40,
    borderRadius: 20,
    borderWidth: 1,

    backgroundColor:"#FFF2",
    borderColor: "#FFF"
  },

  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderColor: '#999',
    padding: 32,
  },

  backgroundImage: {
    flex: 1,
    width: '100%'
  },
});

export default Phrases;