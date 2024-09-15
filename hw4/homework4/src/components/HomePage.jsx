import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <Link to="/about">О нас</Link>
    </div>
  );
};

export default HomePage;
