import { useEffect, useRef } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/header/Header';

function App() {
  const container = useRef<HTMLDivElement>(null);
  // const cursor = useRef<HTMLDivElement>(null);





  // // 커스텀 마우스 커서에 대한 이벤트
  // const mousemoveEvt = (e: MouseEvent) => {
  //   if (cursor.current !== null) {
  //     cursor.current.style.left = `${e.clientX + 1}px`;
  //     cursor.current.style.top = `${e.clientY + 1}px`;
  //   }
  // }
  // const mouseenterEvt = () => { if (cursor.current !== null) cursor.current.style.display = "block"; }
  // const mouseleaveEvt = () => { if (cursor.current !== null) cursor.current.style.display = "none"; }
  




  // // --- useEffect() 이벤트 관련 ---
  // useEffect(() => {
  //   if (container.current !== null) {
  //     container.current.addEventListener("mouseenter", mouseenterEvt);
  //     container.current.addEventListener("mouseleave", mouseleaveEvt);
  //     container.current.addEventListener("mousemove", mousemoveEvt);
  //   };


  //   return () => {
  //     if (container.current !== null) {
  //       container.current.removeEventListener("mouseenter", mouseenterEvt);
  //       container.current.removeEventListener("mouseleave", mouseleaveEvt);
  //       container.current.removeEventListener("mousemove", mousemoveEvt);
  //     }
  //   };

  // }, []);





  return (
    <div id='container' ref={container}>
      {/* <div id="cursor" ref={cursor} onMouseEnter={(e) => e.preventDefault()}></div> */}

      <Router>
        <Header />

        <div id='main'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}



export default App
