import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Api from './Api';

export default function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      let json = await Api.showUsers();
      if (json) {
        setData(json);
      }
      else {
        alert('Erro: ' + json.error);
      }
      setLoading(false);
    }
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="#fff" size={45} />
      ) :
      (
        <View>
          {data.map((item, k) => (
              <Text key={k}>{item.NOME}</Text>
            ))
          }
        </View>
      )}
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
});
