
/**  @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
export const Emotion = () => {
    const containerStyle = css`
        background-color: #e9ffa5;
        border: solid 2px #46cdcf;
        border-radius: 20px;
        padding: 10px;
    `;
    const titleStyle = css`
        color: #3d84a8;
        margin: 0;
        line-height: 1.5;
    `;
    const buttonStyle = css({
        backgroundColor: '#abedd8',
        border: 'none',
        padding: '8px',
        borderRadius: '8px'
    });
    return (
        <>
            <div css={containerStyle}>
                <h1 css={titleStyle}>Emotion</h1>
                <button css={buttonStyle}>Fight!</button>
            </div>

        <style jsx>{`
            h1 {
                color: #3d84a8;
                margin: 0;
                line-height: 1.5;
            }
        `}</style>
        </>
    )
}