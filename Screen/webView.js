import React from 'react';
import WebView from 'react-native-webview';

const webView = () => {
  return (
    <WebView
      source={{
        uri: 'https://github.com/Rishabh11200/',
      }}
      userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36 Edg/96.0.1054.34"
    />
  );
};

export default webView;
