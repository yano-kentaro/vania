//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Header.tsx [Ver.2022_06_02] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_06_02
//┃
//┃──┨ workspaceのヘッダー ┃
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
import Image from 'mui-image'

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
import logo from 'src/static/vania-logo.png'
import avater from 'src/static/vania.png'

//=============================================================|0
//                    スタイル定義
//====================================================|2022_05_25

//------------------------------------------
// AppBar
const AppBar = styled(MUI.AppBar) ({
  backgroundColor: "#123456",
})

//------------------------------------------
// Avatar
const Avatar = styled(MUI.Avatar) ({
  backgroundColor: "#ffffff",
})

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_06_02
function Header() {
  //------------------------------------------
  // 言語設定
  const lang = COMMON.getLang() // 言語設定取得

  return (
    <MUI.Box className="Header">
      <AppBar>
        <MUI.Box className="flex justify-center">
          <MUI.Toolbar className="flex justify-between w-11/12">
            <MUI.Box className="h-10 w-32">
              <Image src={logo} />
            </MUI.Box>
            <Avatar src={avater} />
          </MUI.Toolbar>
        </MUI.Box>
      </AppBar>
    </MUI.Box>
  )
}

//=============================================================|0
//                    Export
//====================================================|2022_06_02
export default Header
