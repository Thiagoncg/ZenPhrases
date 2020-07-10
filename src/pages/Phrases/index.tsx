import React, { useState, useEffect } from "react";
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert, Share } from 'react-native';
import { Roboto_300Light_Italic, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';

// import ButtonShare from '../ButtonShare';

const Phrases = () => {
  

  const listPhases = [
    {
      id: 1,
      phrase: '“Só existem dois dias no ano que nada pode ser feito. Um se chama ontem e o outro se chama amanhã, portanto hoje é o dia certo para amar, acreditar, fazer e principalmente viver.”',
      author: 'Dalai Lama'
    },
    {
      id: 2,
      phrase: '"O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis."',
      author: 'José de Alencar'
    },
    {
      id: 3,
      phrase: '"Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho."',
      author: 'Dalai Lama'
    },
    {
      id: 4,
      phrase: '"A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo."',
      author: 'F. Scott Fitzgerald'
    },
    {
      id: 5,
      phrase: '"O homem comum fala, o sábio escuta, o tolo discute."',
      author: 'Sabedoria oriental'
    },
    {
      id: 6,
      phrase: '“O saber a gente aprende com os mestres e os livros. A sabedoria se aprende é com a vida e com os humildes.”',
      author: 'Cora Coralina'
    },
    {
      id: 7,
      phrase: '"Cada dia a natureza produz o suficiente para nossa carência. Se cada um tomasse o que lhe fosse necessário, não havia pobreza no mundo e ninguém morreria de fome."',
      author: 'Mahatma Gandhi'
    }
  ];

  const phrasesLenght = listPhases.length;

  const phaseChosen = Math.floor(Math.random() * phrasesLenght);


  function handleSharePrint() {
    // onShare();
    openShareDialogAsync();
  }

  //Compartilhamento de texto esta ok
  // const onShare = async () => {
  //   try {
  //     const result = await Share.share({
  //       title: "Frase do Dia",
  //       message: `${listPhases[phaseChosen].phrase}`,
  //     });
  //     if (result.action === Share.sharedAction) {
  //       if (result.activityType) {
  //         // shared with activity type of result.activityType
  //       } else {
  //         // shared
  //       }
  //     } else if (result.action === Share.dismissedAction) {
  //       // dismissed
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Compartilhamento não disponível para esta plataforma`);
      return;
    }
    captureRef(_shareViewContainer, {
      // defaults
    }).then(
      uri => {
        console.log('Imagem salva em', uri);
        // alert(uri)
        Sharing.shareAsync(uri);
        // Sharing.shareAsync("file://" + uri);
      },
      error =>
        alert(error)
        // console.error('Oops, snapshot failed', error)
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/Bacground.png')}
      style={styles.backgroundImage}
      ref={ view => {
        _shareViewContainer = view;
      }}
    >
      <View style={styles.container}>

        <View style={styles.borderPicture}>
          <Image style={styles.picture} source={{uri: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/33020997_1659307647486451_5962006363147075584_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=udolr62E61cAX-N0AKg&_nc_ht=scontent-gru2-2.xx&oh=7d03abc867c6e3d961cdb6e0d78b78ff&oe=5F2FE064'}} />
        </View>

        <Text style={styles.textPhrases}> {listPhases[phaseChosen].phrase}</Text>

        <View style={styles.authorContainer}>
          <Text style={styles.textAuthor}>{listPhases[phaseChosen].author}</Text>
        </View>

      </View>

      <View style={styles.footer}>
        {/* <ButtonShare /> */}
        <TouchableOpacity style={styles.shareContainer} onPress={handleSharePrint}>
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
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 8,
  },

  borderPicture: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 64,
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
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
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
  },

  shareContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: "#FFF2",
    borderColor: "#FFF"
  },

  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderColor: '#999',
    padding: 48,
  },

  backgroundImage: {
    flex: 1,
    width: '100%'
  },
});

export default Phrases;