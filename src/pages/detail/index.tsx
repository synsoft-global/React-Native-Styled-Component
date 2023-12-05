
import React from 'react';
import {useRoute} from '@react-navigation/native';
import styled from 'styled-components/native';

const StyledContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.body};
`;

const StyledText = styled.Text`
  font-size: 18px;
  color:  ${props => props.theme.text};
  font-weight: 400;
`;


const ListDetail = () => {
    const route = useRoute();
    const {data}: any = route.params;

    console.log(data);
    
    return (
    <StyledContainer>
       <StyledText> {data?.title} </StyledText>
       <StyledText> {data?.description} </StyledText>
    </StyledContainer>
    )

}

export default ListDetail;