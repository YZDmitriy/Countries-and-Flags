import styled from 'styled-components';

const Wrapper = styled.section``;

const InfoImage = styled.img``;

const InfoTitle = styled.h1``;

const ListGroup = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

export const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;
console.log(props);
return (
  <Wrapper>
    <InfoImage src={flag} alt={name} />
    <div>
      <InfoTitle>{name}</InfoTitle>
      <ListGroup>
        <List>
          <ListItem>
            <b>Native Name:</b> {nativeName}
          </ListItem>
          <ListItem>
            <b>Population</b> {population}
          </ListItem>
          <ListItem>
            <b>Region:</b> {region}
          </ListItem>
          <ListItem>
            <b>Sub Region:</b> {subregion}
          </ListItem>
          <ListItem>
            <b>Capital:</b> {capital}
          </ListItem>
        </List>
        <List>
          <ListItem>
            <b>Top Level Domain</b>{' '}
            {topLevelDomain.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </ListItem>
          <ListItem>
            <b>Currency</b>{' '}
            {currencies.map((c) => (
              <span key={c.code}>{c.name} </span>
            ))}
          </ListItem>
          <ListItem>
            <b>Top Level Domain</b>{' '}
            {languages.map((l) => (
              <span key={l.name}>{l.name}</span>
            ))}
          </ListItem>
        </List>
      </ListGroup>
      </div>
    </Wrapper>
  );
};