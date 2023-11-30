import React, { useRef } from 'react';
import { TextInput } from 'react-native';
import AppIcon from '../Shared/Icon';
import { SearchInputWrapper, Input, ClearButton } from './styles';

const SearchInput: React.FC = () => {
  const inputRef = useRef<TextInput>(null);
  const [text, setText] = React.useState('');

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleClearText = () => {
    setText('');
    inputRef.current?.focus();
  };
  return (
    <SearchInputWrapper>
      <AppIcon icon="search" size={26} />
      <Input
        value={text}
        ref={inputRef as any}
        onChangeText={handleChangeText}
      />
      {text.length > 0 && (
        <ClearButton onPress={handleClearText}>
          <AppIcon icon="close" size={26} />
        </ClearButton>
      )}
    </SearchInputWrapper>
  );
};

export default SearchInput;
