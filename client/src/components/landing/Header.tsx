//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Header.tsx [Ver.2022_05_22] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_22
//┃
//┃──┨ Landingページのヘッダー ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                          依存関係
//====================================================|2022_05_22

//------------------------------------------
// Modules
import { useState } from 'react'
import * as RCL from 'recoil'

//------------------------------------------
// Components
import * as MUI from '@mui/material'
import { SignUpDialog, signUpFlagState } from './SignUpDialog'

//------------------------------------------
// Functions
import * as COMMON from '../../lib/common'
import * as MSG from '../../msg/landing/header'


//------------------------------------------
// Static
import logo from '../../static/vania-logo.png'


//=============================================================|0
//                    スタイル定義
//====================================================|2022_05_25

const styleContainer = {
  "background-color": "#24292e",
  "opacity": "0.8"
}

const styleToolBar = {
  "display": "flex",
  "justify-content": "space-between"
}

const styleLink = {
  "cursor": "pointer"
}

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_05_23
function Header() {
  //------------------------------------------
  // 言語設定
  const lang = COMMON.getLang() // 言語設定取得
  //------------------------------------------
  // 新規登録 フラグ
  const [signUpFlag, setSignUpFlag] = RCL.useRecoilState(signUpFlagState)
  const toggleSignUpFlag = () => setSignUpFlag(!signUpFlag)
  //------------------------------------------
  // ログイン フラグ
  const [signInFlag, setSignInFlag] = useState(false)
  const toggleSignInFlag = () => setSignInFlag(!signInFlag)

  return (
    <div className="Header">
      {/* PC版 */}
      <MUI.AppBar position="static">
        <MUI.Container maxWidth="xl" sx={styleContainer}>
          <MUI.Toolbar disableGutters sx={styleToolBar}>
            <MUI.Link href='#'>
              <img src={logo} height="50" alt="logo" />
            </MUI.Link>
            <MUI.Breadcrumbs color="white">
              <MUI.Link color="white" underline="hover"
                sx={styleLink} onClick={toggleSignInFlag}
              >
                {MSG.signIn[lang]/* ログイン */}
              </MUI.Link>
              <MUI.Link
                color="white" underline="hover"
                sx={styleLink} onClick={toggleSignUpFlag}
              >
                {MSG.signUp[lang]/* グループを作る */}
              </MUI.Link>
            </MUI.Breadcrumbs>
            <SignUpDialog />
          </MUI.Toolbar>
        </MUI.Container>
      </MUI.AppBar>
    </div>
  )
}

//------------------------------------------
// export
export default Header
