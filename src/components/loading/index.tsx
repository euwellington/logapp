import React, { FC } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface Props
{
    message: string;
}

const Loading: FC<Props> = ({ message }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="rgba(0,0,0,0.8)" />
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'rgba(0,0,0,0.7)',
    fontSize: 15
  },
});

export default Loading;