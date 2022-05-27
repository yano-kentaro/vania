//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Layout.tsx [Ver.2022_05_22] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_22
//┃
//┃──┨ Landingページのレイアウト ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                          依存関係
//====================================================|2022_05_22

//------------------------------------------
// Modules
import { useState } from 'react'

//------------------------------------------
// Components
import * as MUI from '@mui/material'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

//=============================================================|0
//                          コンポーネント定義
//====================================================|2022_05_22
function Layout() {
  const [count, setCount] = useState(0)

  return (
    <MUI.Box className="Layout">
      <Header />
      <Body />
      <Footer />
    </MUI.Box>
  )
}

//------------------------------------------
// export
export default Layout
