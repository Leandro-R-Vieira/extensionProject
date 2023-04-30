import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from "react-native";
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.baseColor};
  justify-content: center;
  align-items: center;
`;
export const SeacrhWrapper = styled.View`
  margin-top: ${RFValue(170)}px;
  flex-direction: row;
`;

export const SearchInput = styled(TextInput)` 
  width: 90%; 
  padding: 12px;
  font-size: ${RFValue(15)}px;  
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 8px;  
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.textColor};
`;

export const TitleContainer = styled.View`
  margin-top: ${RFValue(100)}px;
  align-self: flex-start;
`;

export const Card = styled.TouchableOpacity`
  position: relative;
  margin-left: 10px;
  margin-right: 10px;
`;

export const FavoriteButton = styled.TouchableOpacity` 
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 20px;
`;

export const PosterImage = styled.Image`

  height: ${RFValue(250)}px;;
  width: ${RFValue(150)}px;;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: -3px;  
`;

export const Title = styled.Text` 
  font-size: 25px;
  margin: 10px;  
  color: ${({ theme }) => theme.colors.fadedColor};
`;