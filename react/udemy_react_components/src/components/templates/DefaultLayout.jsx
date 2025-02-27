import { PropTypes } from "prop-types"
import { Header } from "../atoms/layout/Header"
import { Footer } from "../atoms/layout/Footer"

export const DefaultLayout = (props) => {
    const { children } = props;
    return(
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

DefaultLayout.propTypes = { // 追加
    children: PropTypes.node // 追加
};