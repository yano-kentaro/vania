//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Landing.tsx [Ver.2022_05_28] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_28
//┃
//┃──┨ ランディングページ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_05_28

//------------------------------------------
// Modules
import * as RCL from 'recoil'

//------------------------------------------
// Components
import * as MUI from '@mui/material'
import Header from '../layouts/landing/Header'
import EyeCatch from '../layouts/landing/EyeCatch'
import Footer from '../layouts/landing/Footer'

//------------------------------------------
// Functions
import * as COMMON from '../../lib/common'

//------------------------------------------
// Text messages
// import * as TXT from '../../text/'

//------------------------------------------
// Static

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_05_28
function Landing() {
  //------------------------------------------
  // 言語設定
  const lang = COMMON.getLang() // 言語設定取得

  return (
    <MUI.Box className="Landing">
      <Header />
      <MUI.Box height={"6.25rem"} />
      <EyeCatch />
      <MUI.Box height={100} />
      <Footer />
    </MUI.Box>
  )
}

//=============================================================|0
//                    Export
//====================================================|2022_05_28
export default Landing
