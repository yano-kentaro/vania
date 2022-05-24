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
import { getLang } from '../../lib/common'
import { signUp, signIn } from '../../msg/landing/header'
import { SignUpDialog } from './SignUpDialog'

//------------------------------
// components
import {
  AppBar, Container, Toolbar, Link, Breadcrumbs, Dialog
} from '@mui/material'

//------------------------------
// css
import '../../css/landing/header.css'

//------------------------------
// static
import logo from '../../static/vania-logo.png'

//===================================================|0
//                    コンポーネント定義
//==========================================|2022_05_22
function Header() {
  //------------------------------
  // 言語設定
  const lang = getLang() // 言語設定取得
  //------------------------------
  // 新規登録 フラグ
  const [signUpFlag, setSignUpFlag] = useState(false)
  const toggleSignUpFlag = () => setSignUpFlag(!signUpFlag)
  //------------------------------
  // ログイン フラグ
  const [signInFlag, setSignInFlag] = useState(false)
  const toggleSignInFlag = () => setSignInFlag(!signInFlag)

  return (
    <div className="Header">
      <AppBar position="static">
        <Container maxWidth="xl" className='bg_c-24292e opa-08'>
          <Toolbar disableGutters className='dis-fl jus_con-spa_bet'>
            <Link href='#'>
              <img src={logo} height="50" alt="logo" />
            </Link>
            <Breadcrumbs>
              <Link className='cur-poi' underline="hover"
                color="white" onClick={toggleSignInFlag}
              >
                {signIn[lang]}
              </Link>
              <Link className='cur-poi' underline="hover"
                color="white" onClick={toggleSignUpFlag}
              >
                {signUp[lang]}
              </Link>
            </Breadcrumbs>
            <Dialog open={signInFlag}></Dialog>
            <Dialog open={signUpFlag}>
              <SignUpDialog />
            </Dialog>
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
