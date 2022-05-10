import './App.css';
import React from 'react';

function App() {
  const onLogin = (e) => {
    alert('로그인')
  }
  const onSide = (e) => {
    alert('기업순위')
  }

  return (
    <>
      <form onSubmit={onLogin}>
        {/*로그인*/}
        <button className="Login_Button">
          <img src="login.png" className='Login' alt="로그인"/>
        </button>
      </form>

      <form onSubmit={onSide}>
        {/*기업순위*/}
        <button className="TOP_Button">
          <img src="arrow_right.png" className="TOP" alt="기업순위"/>
        </button>
      </form>
      
      <form className="Main">
          <div className="App-header">
            {/* 로고이미지 */}
            <img src="kimleejung_minilogo.png" className="App-logo" alt='logo'></img>
            {/*로고명*/}
            <img src="kimleejung_letterlogo.png" className="App-size" alt='logoName'></img>
          </div>
          &nbsp;&nbsp;
          <div className="App-search">
          {/*검색창*/}
            <b>
              <from>
                <input type="search" className="App-Search" placeholder="기업명을 입력하시오." id="Enterprise" />
                &nbsp;
                {/* 검색버튼 */}
                <button className="search_button">
                  <img src="button.png" className="App-button" alt='버튼 이미지' />
                </button>
              </from>
            </b>
          </div>
        </form>
    </>
  );
}


export default App;