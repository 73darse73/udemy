// propsを受け取る関数コンポーネント
// propsの値が変わると再レンダリングされる
export const ColorfulMessage = (props) => {  // ({ color, children })として、引数を分割代入することもできる
    const { color, children } = props;  // 分割代入
    const contentStyle = {
        color,  // オブジェクトの省略記法 プロパティの名前と変数名が同じであれば、プロパティ名を省略できる
        fontSize: "18px"
    };


    return <p style={contentStyle}>{children}</p>;
}

//上記は名前付きexportの方法であるが、デフォルトexportの方法もある
// importする際に、import ColorfulMessage from "./components/ColorfulMessage";と、{}を使わなくてもよい
// importする際の名前は自由につけられる import Hoge from "./components/ColorfulMessage";
export default ColorfulMessage;