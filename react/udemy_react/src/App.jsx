// jsxファイルは、Reactのコンポーネントを記述するためのファイル
// jsファイルでも良いが、jsxファイルを使うことで、Reactのコンポーネントを記述する際に、より直感的に記述できる

// reactというモジュールから、useStateというフックと言われる関数をインポート
import { useEffect, useState } from "react";

import { ColorfulMessage } from "./components/ColorfulMessage";

// exprtを使うことで、他のファイルから参照できるようになる
// stateの変更を検知して、再レンダリングを行い、コンポーネントを上から評価して、表示していく
export const App = () => {
    console.log('App'); //今後のリアクトの機能変更を見据えて、strictmodeを使用している開発時のみ、すべてのコンポーネントが2回レンダリングが走る
    const [num, setNum] = useState(0); //フックは、関数コンポーネントの一番上の階層で　しか呼び出せない
    const [isShowFace, setIsShowFace] = useState(false);

    const onClickCountUp = () => {
        // 以下のように書くと、1回目のsetNumでnumが更新される前に2回目のsetNumが呼ばれるため、1回目のsetNumの値が反映されない
        // バッジ処理 特定の関数の中で呼ばれてるセット関数は、特定ん関数が終わったと後に実行される
        setNum(num + 1);
        setNum(num + 1);

        // 以下のように書くと、前のsetNumの値も含めて反映される
        setNum((prevNum) => prevNum + 1);
        setNum((prevNum) => prevNum + 1);
    };

    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    }

    // 便利だけど無闇に使うべきではない
    useEffect(() => {

        // 論理演算子を使わないと、無限ループに陥る
        if(num > 0 && num % 9 === 0) {
            isShowFace || setIsShowFace(true);
        }else {
            isShowFace && setIsShowFace(false);
        }

    }, [num]); // numが変更されたときだけuseEffectが実行される

    return (
        // React.Fragmentを使えばdiv要素で囲む必要がなくなる
        // ただし、React.Fragmentは短縮形である<></>を使うことが推奨されている
        <>
            <h1>Hello, React!</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です!</ColorfulMessage>

            {/* {}の中はjs記述を入れることができる */}
            { console.log('Hello, React!') }
            <button onClick={onClickCountUp}>countup</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>Σ('◉⌓◉’)</p>}
        </>
    )
};