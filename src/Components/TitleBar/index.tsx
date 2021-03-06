import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ContainerTitleBar, Title, Subtitle, RowAligned } from './styles';
import { IconEnum } from '../../Utils/PickIcon/types';
import PickIcon from '../../Utils/PickIcon';
import ScreenAction, { ScreenActionProps } from './ScreenAction';
import { Divider } from '../Divider';
import { ColorPalette } from '../../Constants/ColorPalette';

interface TitleBarProps {
  titleIcon: IconEnum;
  header: {
    Title: string;
    Subtitle: string;
    Help: string;
  };
  screenActionProps?: ScreenActionProps;
}

const TitleBar: React.FC<TitleBarProps> = ({
  titleIcon,
  header,
  screenActionProps,
  helpAction,
}) => {
  return (
    <View>
      <ContainerTitleBar>
        <View>
          <RowAligned
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {titleIcon &&
              PickIcon({
                iconType: titleIcon,
                size: 'lg',
                colorIcon: ColorPalette.gray,
              })}
            <Title>{header.Title}</Title>
          </RowAligned>
          <Subtitle>{header.Subtitle}</Subtitle>
        </View>
        <RowAligned>
          <Subtitle>{header.Help}</Subtitle>
          <TouchableOpacity
            onPress={() => {
              return true;
            }}
          >
            {PickIcon({
              iconType: IconEnum.Help,
              size: 'md',
              colorIcon: ColorPalette.gray,
            })}
          </TouchableOpacity>
        </RowAligned>
      </ContainerTitleBar>
      <Divider />
      <ScreenAction
        navigateForBackButton={screenActionProps?.navigateForBackButton}
        buttonProps={screenActionProps?.buttonProps}
      />
    </View>
  );
};

export default TitleBar;
