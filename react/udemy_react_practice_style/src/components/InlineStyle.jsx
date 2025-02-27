export const InlineStyle = () => {
    const containerStyle = {
        border: 'solid 2px #392eff',
        borderRadius: '20px',
        padding: '8px',
        margin: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const titleStyle = {
        color: '#3d84a8',
        fontSize: '18px'
    };
    const buttonStyle = {
        color: '#fff',
        backgroundColor: '#3d84a8',
        borderRadius: '10px'
    };
    return (
    <div style={containerStyle}>
        <p style={titleStyle}>こんにちは！</p>
        <button style={buttonStyle}>Fight!</button>
    </div>
    )
}