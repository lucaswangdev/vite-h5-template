import React, { useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import routes from "@/router";
// import './utils/page-scale'

function App() {
  const handleResize = () => {
    // 设计稿宽度
    const uiWidth = 750;
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const contentWidth = Math.floor(width);
    const fontSize = (contentWidth / uiWidth) * 100;
    // 设置rem字体大小
    document.documentElement.style.fontSize = fontSize + "px";
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
