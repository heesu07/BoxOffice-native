import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import fetch from '../net/fetch';


const Container = styled.SafeAreaView`
  flex: 1;
`;
const Contents = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;  
  margin: 4px 12px;
`;
const Description = styled.Text`
  font-size: 18px;
  margin: 4px 12px;
`;
const BackBtn = styled.TouchableOpacity`
  height: 50px;
  padding: 12px;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
`;
const BackLabel = styled.Text`
  font-size: 18px;
  color: #0000cc;
  justify-content: center;
`;
const Header = styled.View`
  height: 50px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  
`;
const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Detail = (props) => {
  const [info, setInfo] = React.useState(null);
  React.useEffect(() =>{
    const movieCd = props.route.params.movieCd;
    const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=1c9690d9f772d2a69f8089a32b59a375&movieCd=${movieCd}`
    // axios.get(url)
    //   .then(response => setInfo(response.data.movieInfoResult.movieInfo))
    //   .catch(err => alert(err.message));
   fetch(url)
    .then(data => setInfo(data.movieInfoResult.movieInfo))
    .catch(err => alert(err.message)); 
  },[]);

  return (
      <Container>
        <Header>
          <BackBtn onPress={() => props.navigation.goBack()}>
            <BackLabel>⇦</BackLabel>
          </BackBtn>
          <HeaderTitle>Movie Detail</HeaderTitle>
          <BackBtn></BackBtn>
        </Header>
        <Contents>
          {
            info && (
              <>
                <Title> {info.movieNmEn}</Title>
                <Description> Release Year : { info.prdtYear } </Description>
                <Description> Open Year : { info.openDt } </Description>
                <Description> Running Time : { info.showTm } min </Description>
                <Description> Nations : { info.nations.map(item => item.nationNm).join(', ') } </Description>
                <Description> Director : { info.directors.map(item=>item.peopleNm).join(', ') } </Description>
                <Description> Actors : { info.actors.map(item=>item.peopleNm).join(', ') } </Description>
                
              </>
            ) 
          }
          
        </Contents>
        
      </Container>
  )
}

export default Detail;