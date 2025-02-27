import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { Home } from './Home'
import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { Page1DetailA } from './Page1DetailA'
import { Page1DetailB } from './Page1DetailB'

export const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>  {/* このコンポーネントで囲った配下をルーティングできるようにする */}
        <Link to="/">Home</Link>  {/* HTMLのaタグのようにリンクを作成する */}
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Routes>  {/* SwitchをRoutesに変更 */}
          <Route path="/" element={<Home />} />  {/* elementプロパティを使用 */}
          <Route path="/page1" element={<Page1 />} >
            <Route path="detailA" element={<Page1DetailA />} />
            <Route path="detailB" element={<Page1DetailB />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Routes>  {/* SwitchをRoutesに変更 */}
      </BrowserRouter>
    </>
  )
}
