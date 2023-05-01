import React from 'react';
import {    
    Container,
    WarningBox,
    Description,    
    DescriptionBox,    
} from './styles';

export default function EmptyFavorite() {
    return (
        <Container >
            <WarningBox>                
                <DescriptionBox>
                    <Description>No favorite movies.</Description>
                </DescriptionBox>
            </WarningBox>            
        </Container>
    );
}


