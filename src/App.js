import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <form>
        <button class="Login">로그인</button>
        <button>
          <img src="arrow_right" className="TOP" alt="기업순위"/>
        </button>
      </form>
      <div>
        {/* 로고이미지 */}
        <img src="kimleejung_minilogo.png" className="App-logo" alt='logo'></img>
        {/*로고명*/}
        <img src="kimleejung_letterlogo.png" className="App-size" alt='logoName'></img>
      </div>

      &nbsp;&nbsp;
      {/*검색창*/}
      <b>
        <from>
          <input type="search" className="App-Search" placeholder="기업명을 입력하시오." id="Enterprise" />
          &nbsp;
          {/* 검색버튼 */}
          <button>
            <img src="button.png" className="App-button" alt='버튼 이미지' />
          </button>
        </from>
      </b>
    </>
  );
}


export default App;