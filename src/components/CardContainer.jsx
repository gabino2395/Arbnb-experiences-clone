import React from 'react'
import data from "../data";
import Card from './Card';
const CardContainer = () => {

  const dataElements = data.map((element) => {
    return <Card key={element.id} {...element} />;
  });
  return (
    <section className="cards-list">{dataElements}</section>  )
}

export default CardContainer