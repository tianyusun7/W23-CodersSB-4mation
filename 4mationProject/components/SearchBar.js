import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  SearchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
})
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    // Do something with the search term
  };

  return (
    <View style= {styles.searchbar}>
      <TextInput
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchTerm}
      />
    </View>
  );
};

export default SearchBar;