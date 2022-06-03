//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Workspace.tsx [Ver.2022_06_02] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_06_02
//┃
//┃──┨ Workspaceページ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_06_02

//------------------------------------------
// Modules
import * as RCL from 'recoil'
import { styled } from '@mui/material/styles'

//------------------------------------------
// Components
import * as MUI from '@mui/material'
import Header from 'src/components/layouts/workspace/Header'
import Body from 'src/components/layouts/workspace/Body'
import Footer from 'src/components/layouts/workspace/Footer'

//------------------------------------------
// Functions
import * as COMMON from 'src/lib/common'

//------------------------------------------
// Tailwind CSS
import 'src/index.css'

//------------------------------------------
// Text
// import * as TXT from 'src/text/'

//------------------------------------------
// Static

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_06_02
function Workspace() {
  //------------------------------------------
  // 言語設定
  const lang = COMMON.getLang() // 言語設定取得

  return (
    <MUI.Box className="Workspace">
      <Header />
      <MUI.Box className="h-16" />
      <Body />
      <Footer />
    </MUI.Box>
  )
}

//=============================================================|0
//                    Export
//====================================================|2022_06_02
export default Workspace
