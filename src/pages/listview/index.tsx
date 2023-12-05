import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { useGetAllItemsQuery } from '../../services/productApiSlice';
import { setProducts } from '../../redux/Products/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const StyledContainer = styled.View`
    flex: 1;
    background-color: ${props => props.theme.body};
`;

const StyledRow = styled.View`
   display: flex;
   flex-direction: row;
   gap: 12px;
   margin: 8px;
   padding: 8px;
   background: ${props => props.theme.cardBg};
   border-radius: 8px;
`
const StyledContent = styled.View`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-right: 20px
`

const StyledRowImage = styled.Image`
   height: 100px;
   width: 100px;
   object-fit: cover;
   border-radius: 8px;
`
const StyledTextTitle = styled.Text`
  font-size: 18px;
  color:  ${props => props.theme.text};
  font-weight: 600;
  margin-bottom: 4px;
`;

const StyledTextDesc = styled.Text`
  font-size: 14px;
  color:  ${props => props.theme.text};
  font-weight: 400;
  max-width: 85%;
`;
const LinkText = styled.Text`
  font-size: 16px;
  color:  ${props => props.theme.text};
  font-weight: 500;
`;

// Main component for displaying a list of items
const ListView = () => {
  const pageDatalimit = 10;
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const [pageNumber, setPageNumber] = useState(0)
  const { data: apiResponse, isFetching } = useGetAllItemsQuery({ limit: pageDatalimit, skip: pageNumber * pageDatalimit })
  const listData = useSelector((state: any) => state.product.productsData)

  useEffect(() => {
    // Update the Redux store with the received API response
    if (pageNumber === 0) {
      dispatch(setProducts(apiResponse))
    } else {
      const updatedProducts = {
        ...apiResponse,
        products: [...(listData?.products || []), ...apiResponse?.products],
      };
      dispatch(setProducts(updatedProducts));
    }
  }, [apiResponse])

  // Function to fetch the next page of data
  const fetchNextPage = () => {
    if (listData?.total > listData?.products?.length + 1 && !isFetching) {
      setPageNumber(pageNumber + 1)
    }
  }

  // Function to render each item in the list
  const renderItem = (rowData: any) => {
    return (
      <StyledRow>
        <StyledRowImage source={{ uri: rowData?.item?.thumbnail }} />
        <StyledContent>
          <View>
            <StyledTextTitle>
              {rowData?.item?.title}
            </StyledTextTitle>

            <StyledTextDesc numberOfLines={3} ellipsizeMode="tail">
              {rowData?.item?.description}
            </StyledTextDesc>
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate('Details', { data: rowData?.item });}}>
              <LinkText>More</LinkText>
            </TouchableOpacity>
        </StyledContent>
      </StyledRow>
    )
  }

  // Component to show a loader at the end of the list when fetching next page data
  const ListEndLoader = () => {
    if (isFetching) {
      // Show loader at the end of list when fetching next page data.
      return <ActivityIndicator size={'large'} />;
    }
  };

  return (
    <StyledContainer>
      {listData &&
        <FlatList
          data={listData?.products}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          onEndReachedThreshold={0.8}
          ListFooterComponent={ListEndLoader}
        />
      }
    </StyledContainer>
  )
}


export default ListView;


