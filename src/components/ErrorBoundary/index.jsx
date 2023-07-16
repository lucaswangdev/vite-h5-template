/* eslint-disable react/prop-types */
import React from "react";
import styles from './index.module.less'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, errorMessage: '' 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log('捕获错误：', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if(this.props.renderError) {
        return this.props.renderError();
      }
      // You can render any custom fallback UI
      return <div className={styles.errorBoundaryWrapper}>
        <div>页面错误，请刷新后重试。</div>
        <p>错误信息：{this.state.errorMessage || '未知错误'}</p>
      </div>;
    }
    return this.props.children; 
  }
}