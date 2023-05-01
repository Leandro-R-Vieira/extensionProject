import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;  
  border: 2px solid;
  border-radius: 10px;
  margin: ${RFValue(10)}px;
  height: ${RFValue(125)}px;
  padding: 0 ${RFValue(30)}px;
  margin-top: ${RFValue(150)}px;
  margin-right: ${RFValue(19)}px;
  justify-content: space-evenly;
  border-color: ${({ theme }) => theme.colors.secondaryColor};  
`;

export const WarningBox = styled.View`
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const DescriptionBox = styled.View``;

export const Description = styled.Text`
  text-align: center;
  font-size: ${RFValue(27)}px;
  color: ${({ theme }) => theme.colors.secondaryColor};  
`;