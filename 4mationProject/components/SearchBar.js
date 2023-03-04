import React from 'react';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    // Do something with the search term
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchTerm}
      />
    </View>
  );
};

export default SearchBar;