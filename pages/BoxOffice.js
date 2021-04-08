import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import Title from '../components/Title';
import MovieName from '../components/MovieName';
import ListItem from '../components/ListItem';
import fetch from '../net/fetch';

const Container = styled.SafeAreaView`
  flex: 1;
`;
const Contents = styled.ScrollView`
  flex: 1;
`;
const Rank = styled.Text`
  font-size: 14px;
  color: #999999;
  margin-right: 12px; 
`;
const BoxOffice = ({route, navigation}) => {
  const [list, setList] = React.useState([]);
  React.useEffect(() =>{
    const url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1c9690d9f772d2a69f8089a32b59a375&targetDt=20210407';
    // axios.get('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1c9690d9f772d2a69f8089a32b59a375&targetDt=20210407')
    // .then(data => setList(data.data.boxOfficeResult.dailyBoxOfficeList))
    // .catch(err => alert(err.message));
    fetch(url)
      .then(data => setList(data.boxOfficeResult.dailyBoxOfficeList))
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