import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  SearchBar: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 5,
    flex: 1,
    height: 36, 
  },
})
const SearchBar = ({ defaultText }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    // Do something with the search term
  };

  return (
    <View style= {styles.SearchBar}>
      <TextInput
        placeholder={defaultText}
        onChangeText={handleSearch}
        value={searchTerm}
      />
    </View>
  );
};

export default SearchBar;