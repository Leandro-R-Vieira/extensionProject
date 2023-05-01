import { TextInput } from "react-native";
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.baseColor};
`;
export const SeacrhWrapper = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(170)}px;
`;

export const SearchInput = styled(TextInput)` 
  width: 90%; 
  padding: 12px;
  margin-left: 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 8px;  
  font-size: ${RFValue(15)}px;  
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.textColor};
`;

export const TitleContainer = styled.View`
  align-self: center;  
  margin-top: ${RFValue(120)}px;
`;

export const Card = styled.TouchableOpacity`
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
`;

export const FavoriteButton = styled.TouchableOpacity` 
  right: 0;
  margin-top: 20px;
  margin-right: 10px;
  position: absolute;
`;

export const PosterImage = styled.Image`
  margin-top: 5px;
  margin-bottom: -3px;  
  border-radius: 10px;
  width: ${RFValue(150)}px;;
  height: ${RFValue(250)}px;;
`;

export const Title = styled.Text` 
  margin: 10px;  
  font-size: 24px;  
  color: ${({ theme }) => theme.colors.textColor};
`;