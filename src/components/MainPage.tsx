import React, { useState } from 'react';
import style from './MainPage.module.css';
import MainLogo from './MainLogo';
import NicknameInput from './NicknameInput';


function MainPage() {
  const [loggedIn,setloggedIn] = useState(false);
  return (
    <div className={style.MainPage}>

      <div className={style.content}>
        <MainLogo play={loggedIn} />
        
        <div className={loggedIn?style.fadeOutDown:""}>
          <div className={style.description}>GORANI HANG MAN GAME</div>
          <NicknameInput onPlay={(nick:string) => { setloggedIn(true) }} />
        </div>
      </div>

    </div>

  );
}

export default MainPage;
