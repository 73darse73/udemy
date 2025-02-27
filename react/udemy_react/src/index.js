import React from 'react';

// より厳密なルールで書くことを強要しますよという意味
// reactでは推奨されている書き方
import { StrictMode } from 'react';

//'react-dom/client'というパッケージからcreateRoot関数をインポート
import {createRoot} from 'react-dom/client';

// Appコンポーネントをインポート
import { App } from './App';

// ルート要素を取得
const rootElement = document.getElementById('root');

// createRoot関数を使って、ルート要素を指定してRootを作成
const root = createRoot(rootElement);

// Rootのrenderメソッドを使って、Appコンポーネントをレンダリング
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);