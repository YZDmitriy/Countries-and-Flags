import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardlListItem = styled.li``;


function Card({img, name, info = [], onClick}) {
  return (
    <Wrapper>
      <CardImage/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(el => (
            <CardlListItem key={el.title}>
              <b>{el.title}:</b> {el.desctiption}
            </CardlListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
}

export default Card;
