import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { getUserInfo } from "../../service/home";
import { useAppStore } from "../../store";
import { useNavigate} from 'react-router-dom';
// import { Button } from 'antd-mobile';
import { Button } from 'antd-mobile'


export default function About() {
  const [count, setCount] = useState(0);
  const bears = useAppStore((state) => state.bears)
  const increasePopulation = useAppStore((state) => state.increasePopulation);
  const navigate = useNavigate();

  useEffect(() => {
    // 
  }, []);

  const sendRequest = () => {
    getUserInfo({})
      .then((res) => {
        console.log(res);
        const { count } = res.data || {};
        setCount(count)
      })
      .catch((err) => console.log(err));
  }

  const goToHomePage = () => {
    navigate('/')
  }

  return (
    <div className={styles.about}>
      <h2>About页面</h2>
      <p className={styles.title}>测试测试</p>
      <p>count: {count}</p>
      <Button color="primary" size="small" onClick={sendRequest}>发送请求</Button>
      <Button color="primary" size="small" onClick={goToHomePage}>回到首页</Button>
      <p>bears: {bears}</p>
      <Button color="primary" size="small" onClick={increasePopulation}>bears +1</Button>
        <div className={styles.appButton}>{document.documentElement.clientWidth}xxxxx</div>
        <div className={styles.appButton2}>{document.documentElement.clientWidth}xxxxyyy</div>
        <Button color='primary' fill='solid'>
            Solid
          </Button>
          <Button color='primary' size='large'>
          Block Button
        </Button>
    </div>
  );
}
