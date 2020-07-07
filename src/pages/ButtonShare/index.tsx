import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import { Feather as Icon } from '@expo/vector-icons';

// You can import from local files
  import Phrases from '../Phrases';

export default class ButtonShare extends React.Component {
  openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Compartilhamento não disponível para esta plataforma`);
      return;
    }
    captureRef(this._shareViewContainer, {
      // defaults
    }).then(
      uri => {
        console.log('Imagem salva em', uri);
        Sharing.shareAsync(uri);
      },
      error =>
        console.error('Oops, snapshot failed', error)
    );
  };

  render() {
    return (
      <View
        style={styles.container}
        ref={ view => {
          this._shareViewContainer = view;
        }}>
        <Phrases />
        <TouchableOpacity
          onPress={this.openShareDialogAsync}
          style={styles.button}>
          <Icon name="share" color="#FFF" size={22} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});