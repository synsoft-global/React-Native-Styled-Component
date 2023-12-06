
import React from 'react';
import {useRoute} from '@react-navigation/native';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

const StyledContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.body};
`;

const StyledCarouselBg = styled.View`
      margin: 10px;
`;

const StyledInfoBg = styled.View`
  flex: 2;
`;

const StyledText = styled.Text`
  font-size: 18px;
  color:  ${props => props.theme.text};
  font-weight: 400;
`;


const StyledCarouselImage = styled.Image`
   height: 200px;
   width: 100%;
   object-fit: contain;
   border-radius: 8px;
`

const ListDetail = () => {
     const { width: screenWidth } = Dimensions.get('window')

    const route = useRoute();
    const {data}: any = route.params;

    console.log(data);

      // Function to render images in carouse
  const renderItem = (rowData: any) => {
    console.log(rowData);
    
    return (
      <StyledCarouselImage source={{ uri: rowData?.item}} /> 
    )
  }
    
    return (
    <StyledContainer>
      <StyledCarouselBg>
        <Carousel
                data={data?.images}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                sliderHeight={200}
                itemWidth={screenWidth - 60}
                layout={'stack'} 
                layoutCardOffset={`18`}
              />
      </StyledCarouselBg>
       
            <StyledInfoBg>
                 <StyledText> {data?.title} </StyledText>
                 <StyledText> {data?.description} </StyledText>
            </StyledInfoBg>
       
    </StyledContainer>
    )

}

export default ListDetail;