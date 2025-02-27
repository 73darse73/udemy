import './App.css';
import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
export const App = () => {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const onChangeText = (e) => {
        setText(e.target.value);
    }
    const onClickOpen = () => {
        setOpen(!open);
    }

    const onClickClose = useCallback(() => {
        setOpen(false);
    } ,[setOpen]);

    const temp = useMemo(() => 1 + 3, []);
    console.log(temp);

    return (
        <>
            <input type="text" value={text} onChange={onChangeText} />
            <br />
            <br />
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose} />
            <InlineStyle />
        </>
    );
}