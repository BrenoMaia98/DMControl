import React from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';

import { Item, Label, Input } from 'native-base';
import { Container, SearchInput } from './styles';
import IconButton from '../IconButton';
import { IconEnum } from '../../Utils/PickIcon/types';

interface SearchBarProps {
  label: string;
  labelPosition: 'stacked' | 'floating' | 'inlineLabel' | 'fixedLabel';
  onSearch(value: string): void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  label,
  onSearch,
  labelPosition,
}) => {
  const [value, setValue] = React.useState<string>('');
  return (
    <Container>
      <Item
        stackedLabel={labelPosition === 'stacked' || undefined}
        floatingLabel={labelPosition === 'floating' || undefined}
        inlineLabel={labelPosition === 'inlineLabel' || undefined}
        fixedLabel={labelPosition === 'fixedLabel' || undefined}
        last
      >
        <Label>{label}</Label>
        <SearchInput
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={({ currentTarget }: any) => {
            console.log(String(currentTarget.value));
            setValue(String(currentTarget.value));
          }}
        />
      </Item>
      <IconButton
        onPress={() => {
          onSearch(value);
        }}
        defaultIcon={IconEnum.GoSearch}
      />
    </Container>
  );
};

export default SearchBar;
