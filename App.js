import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider, SafeAreaInsetsContext } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {(insets) => (
              <View style={[styles.container, {paddingTop: insets?.top || 0}]}>
                <WebView style={styles.webview} source={{ uri: 'https://knuhackerton-web.vercel.app' }} />
              </View>
          )}
        </SafeAreaInsetsContext.Consumer>
        <StatusBar style="black" backgroundColor="#f8f8f8" />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  }
});
