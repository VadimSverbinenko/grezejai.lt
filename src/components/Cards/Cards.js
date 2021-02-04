import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mūsų Privalumai</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://pojbez31.ru/assets/content/img/service/montaj/otver-buren.jpg'
              text='Geriausias kainos ir kokybės santykis.'
              label='Galerija'
              path='/products'
            />
            <CardItem
              src='https://www.sujitbetal.com/images/product/a7.jpg'
              text='Ypač tvarkingas darbas'
              label='Galerija'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://stroy-podskazka.ru/images/article/croppedtop/718-400/2020/07/burenie-betona-almaznymi-koronkami-30.jpg'
              text='Siūlome platų skylių pasirinkimą, įgyvendinant Jūsų projektą.'
              label='Galerija'
              path='/products'
            />
            <CardItem
              src='https://s3.envato.com/files/239290987/preview.jpg'
              text='Gražu ir praktiška – estetika ir funkcionalumas.'
              label='Galerija'
              path='/products'
            />
            <CardItem
              src='https://image-thumbs.izi.ua/25722403_310_430'
              text='Naudojame tik žinomų gamintojų skylių gręžimo įrangą'
              label='Galerija'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;