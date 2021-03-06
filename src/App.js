import {useState} from 'react'
import './App.css';
import React, { Children } from 'react';



function App() {
  const onLogin = (e) => {
    alert('로그인 페이지로 이동합니다.')
  }

  const [isNav,setNav]=useState(false)
  const onSide = (e) => {
      e.preventDefault();
      setNav((prev) => !prev)
    }

  return (
    <>
    <form onSubmit={onLogin}>
      {/* 로그인 */}
      <button className="Login_Button">
      <img src="login.png" className='Login' alt="로그인"/>
      </button>
    </form>

    {/* 기업순위 */}
    <form onSubmit={onSide}>
          <button className="TOP_Button">
            <img src="arrow_push.png" className="TOP" alt="배당률 순위" />
          </button>
        </form>

    <div className='nav' style={isNav?{display:"block"}:{display:'none'}}>
      
      {/*sample data*/}
      <h1>배당률 TOP 10</h1>
      <ul>1순위, 기업 명, n%</ul>
      <ul>2순위, 기업 명, n%</ul>
      <ul>3순위, 기업 명, n%</ul>
      <ul>4순위, 기업 명, n%</ul>
      <ul>5순위, 기업 명, n%</ul>
      <ul>6순위, 기업 명, n%</ul>
      <ul>7순위, 기업 명, n%</ul>
      <ul>8순위, 기업 명, n%</ul>
      <ul>9순위, 기업 명, n%</ul>
      <ul>10순위, 기업 명, n%</ul>

        <form onSubmit={onSide}>
          <button className="Side_Button">
            <img src="arrow_pull.png" className="TOP" alt="기업순위" />
          </button>
        </form> 
      </div>

    <form>
      {/* 로고 이미지 */}
      <img src="kimleejung_minilogo.png" className="App-logo" alt='logo'/>
      {/* 로고명 */}
      <img src="kimleejung_letterlogo.png" className="App-size" alr='logoName'/>
      {/* 검색창 */}
      <input type="search" className="App-Search" placeholder="기업명을 입력하시오." id="Enterprise" />
      {/* 검색버튼 */}
      <button className="search_button">
      <img src="button.png" className="App-button" alt='버튼 이미지'/>
      </button>  
</form>

</>
  )
}

export default App;