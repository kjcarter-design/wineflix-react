import React from 'react';
import Category from './Category';
import { wines } from '../constants';

export default function Main() {
  const drinkAgainWines = wines.slice(0, 8);
  const keepDrinkingWines = wines.slice(8);

  return (
    <main>
      <Category title="Drink Again" wines={drinkAgainWines} />
      <Category title="Keep Drinking" wines={keepDrinkingWines} />
    </main>
  );
};