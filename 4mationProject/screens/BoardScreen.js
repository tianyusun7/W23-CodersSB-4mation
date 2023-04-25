import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar.js';
import BoardInfo from '../components/BoardInfo';
import { boardInfoData } from '../TestData.js'
import { PostListData } from '../TestData.js'
import ComponentList from '../components/ComponentList.js';


const BoardScreen = (props) => {
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
      <TopBar navigation={navigation} defaultText="search a post"/>
      <BoardInfo {...boardInfoData[id]} />
      <ComponentList navigation={navigation} data={PostListData}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BoardScreen;