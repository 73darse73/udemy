export const StyledJsx = () => {
    return (
        <>
        <div className="container">
            <p className="title">こんにちは！</p>
            <button className="button">Fight!</button>
        </div>
        <style jsx >{`
            .container {
                text-align: center;
                background-color: #e9ffa5;
                border: solid 2px #46cdcf;
                border-radius: 20px;
                padding: 10px;
            }
            .title {
                color: #3d84a8;
                margin: 0;
                line-height: 1.5;
            }
            .button {
                background-color: #abedd8;
                border: none;
                padding: 8px;
                border-radius: 8px;
            }
        `}</style>
        </>
    )
}