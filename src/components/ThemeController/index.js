import React from 'react';
import * as S from './styles';

const ThemeController = ({ currentTheme, changeTheme }) => {
  return (
    <S.Wrapper>
      Dark Mode
      <S.Switch>
        <input
          type='checkbox'
          checked={currentTheme}
          onChange={() => changeTheme(!currentTheme)}
        />
        <span className='slider round'></span>
      </S.Switch>
    </S.Wrapper>
  );
};

export default ThemeController;
