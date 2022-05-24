//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Header.tsx [Ver.2022_05_22] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_22
//┃
//┃──┨ Landingページのヘッダー ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//===================================================|0
//                    依存関係
//==========================================|2022_05_22

//------------------------------
// Modules
import { useState } from 'react'
import { atom, selector, useRecoilState } from 'recoil'
import { getLang } from '../../lib/common'
import { signUp, signIn } from '../../msg/landing/header'

//------------------------------
// components
import {
  AppBar, Container, Toolbar, Link, Breadcrumbs, Dialog
} from '@mui/material'
import { SignUpDialog, signUpFlagState } from './SignUpDialog'

//------------------------------
// static
import logo from '../../static/vania-logo.png'


//===================================================|0
//                    スタイル定義
//==========================================|2022_05_25

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

//===================================================|0
//                    コンポーネント定義
//==========================================|2022_05_22
function Header() {
  //------------------------------
  // 言語設定
  const lang = getLang() // 言語設定取得
  //------------------------------
  // 新規登録 フラグ
  const [signUpFlag, setSignUpFlag] = useRecoilState(signUpFlagState)
  const toggleSignUpFlag = () => setSignUpFlag(!signUpFlag)
  //------------------------------
  // ログイン フラグ
  const [signInFlag, setSignInFlag] = useState(false)
  const toggleSignInFlag = () => setSignInFlag(!signInFlag)

  return (
    <div className="Header">
      {/* PC版 */}
      <AppBar position="static">
        <Container maxWidth="xl" sx={styleContainer}>
          <Toolbar disableGutters sx={styleToolBar}>
            <Link href='#'>
              <img src={logo} height="50" alt="logo" />
            </Link>
            <Breadcrumbs color="white">
              <Link color="white" underline="hover"
                sx={styleLink} onClick={toggleSignInFlag}
              >
                {signIn[lang]/* ログイン */}
              </Link>
              <Link
                color="white" underline="hover"
                sx={styleLink} onClick={toggleSignUpFlag}
              >
                {signUp[lang]/* グループを作る */}
              </Link>
            </Breadcrumbs>
            <SignUpDialog />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

//===================================================|0
//                    Export
//==========================================|2022_05_22
export default Header
