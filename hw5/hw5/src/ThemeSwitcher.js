import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme); // Получаем текущую тему из состояния
  const dispatch = useDispatch(); // Для отправки действия переключения темы

 
  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1>{theme === 'light' ? 'Светлая Тема' : 'Темная Тема'}</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Переключить на {theme === 'light' ? 'Темную' : 'Светлую'} Тему
      </button>
    </div>
  );
};

export default ThemeSwitcher;