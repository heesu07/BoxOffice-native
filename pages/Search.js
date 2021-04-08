import React from 'react';
import styled from 'styled-components';
import Row from '../components/Row';
import Title from '../components/Title';
import ListItem from '../components/ListItem';
import MovieName from '../components/MovieName';
import Detail from '../pages/Detail';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;

`;
const Input = styled.TextInput`
  flex: 1;
  border: 1px solid #e5e5e5;
  margin-left: 12px;
  padding: 0 12px;
`;
const Button = styled.Button`

`;

const Search = (props) => {
  const [keyword, setKeyword] = React.useState('');
  const [list, setList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const search = React.useCallback(() => {
    //const word = keyword.toString("utf8");
    let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=1c9690d9f772d2a69f8089a32b59a375`;
    url += '&movieNm=' + keyword;
    setIsLoading(true);
    axios.get(url)
      //.then(response =>console.log(response.data.movieListResult.movieList))
      .then(response => setList(response.data.movieListResult.movieList))
      .catch(err => alert(err.message));
    setIsLoading(false);
  }, [keyword]);
 

  return (
      <Container>
        <Title>Search movie</Title>
        <Row>
          <Input value={keyword} onChangeText={value=> setKeyword(value)}/>
          <Button title='Search' onPress={ search } />
        </Row>
        
        {
          isLoading ? <ActivityIndicator size='large'/> :
          list && list.map(item => {
            return(
              <ListItem 
                key={item.movieCd}
                onPress={ () => props.navigation.navigate('Detail', {movieCd: item.movieCd})}
              >                
                <MovieName> { item.movieNm } </MovieName>          
              </ListItem>
            );
          })
        }
      </Container>
  )
}

export default Search;