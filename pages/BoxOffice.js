import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';


const Container = styled.SafeAreaView`
  flex: 1;
`;
const Contents = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 12px;
`;

const ListItem = styled.TouchableOpacity`
  padding : 12px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  align-items: center;
  flex-direction: row;
`;
const Rank = styled.Text`
  font-size: 14px;
  color: #999999;
  margin-right: 12px; 
`;
const MovieName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  
`;


const BoxOffice = ({route, navigation}) => {
  const [list, setList] = React.useState([]);
  React.useEffect(() =>{
    axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1c9690d9f772d2a69f8089a32b59a375&targetDt=20210407')
    .then(data => setList(data.data.boxOfficeResult.dailyBoxOfficeList))
    .catch(err => alert(err.message));

  }, [] );

  return (
    <Container>
      <Contents>
        <Title> Box Office (Korea)</Title>
        {
          list.length === 0 && (<ActivityIndicator size= 'large' />)
        }
        {
          list && list.map(item => {
            return(
              <ListItem 
                key={item.movieCd}
                onPress={ () => navigation.navigate('Detail', {movieCd: item.movieCd})}
              >
                <Rank> {item.rank} </Rank>
                <MovieName> { item.movieNm } </MovieName>          
              </ListItem>
            );
          })
        }
      </Contents>
    </Container>
  )
}

export default BoxOffice;