import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ComponentList from '../components/ComponentList.js';
import TopBar from '../components/TopBar.js';
import { getBoardListData } from '../firebase.js';
import Loading from '../components/Loading.js';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const result = await getBoardListData("numMembers", true);
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} defaultText="search a board"/>
      <ComponentList navigation={navigation} data={data}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;