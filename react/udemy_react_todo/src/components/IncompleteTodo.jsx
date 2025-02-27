export const IncompleteTodo = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
        <div className="incomplete-area">
            <p className="title">未完了のtodo</p>
            <ul>
                {todos.map((todo, index) => (
                    // Reactの裏側で動いている仮想DOMでは、変更前と変更後の差分のみを抽出し、その差分だけをブラウザに反映する
                    // そのため、key属性を指定しないと、差分が抽出できず、全ての要素が再描画される
                    <li key={todo}>
                        <div className="list-row">
                            <p className="todo-item">{todo}</p>
                            <button onClick={() => onClickComplete(index)}>完了</button>
                            <button onClick={() => onClickDelete(index)}>削除</button>  {/* onClickDelete(index)とすると、即時実行され、ボタンが押された時のみでは無く、再レンダリングされた時にも実行されてしまう。 */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};