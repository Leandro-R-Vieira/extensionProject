import { TextInput } from "react-native";
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;
export const SeacrhWrapper = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: ${RFValue(170)}px;
`;

export const SearchInput = styled(TextInput)` 
  width: 85%; 
  padding: 12px;
  border-radius: 5px;    
  font-size: ${RFValue(15)}px;  
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.textColor};
`;

export const TitleContainer = styled.View`
  align-self: flex-start;
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

export const ModalButton = styled.TouchableOpacity`    
  margin-right: ${RFValue(12)}px;
`;

export const PosterImage = styled.Image`
  margin-top: 5px;
  margin-bottom: -3px;  
  border-radius: 10px;
  width: ${RFValue(150)}px;
  height: ${RFValue(250)}px;
`;

export const Title = styled.Text` 
  margin: 10px;  
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fadedColor};
`;

export const ModalContainer = styled.View`
  width: 40%;
  height: auto;
  border-radius: 5px;
  background-color: #1a2639;
`;

export const GenreButton = styled.TouchableOpacity``;

export const GenreTitleContainer = styled.View`  
  padding-left: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const GenreSeparator = styled.View` 
  height: 1px;
  background-color: ${({ theme }) => theme.colors.textColor};
`;

export const GenreTitle = styled.Text` 
  font-size: 21px;  
  
  color: ${({ theme }) => theme.colors.secondaryColor};
`;

export const GenreHeadTitle = styled.Text` 
  font-size: 21px;  
  margin-bottom: 2px;
  font-style: italic;
  align-self: center;
  color: ${({ theme }) => theme.colors.textColor};
`;