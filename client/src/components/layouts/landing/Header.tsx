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
import { SignUpDialog, signUpFlagState } from '../../landing/SignUpDialog'

//------------------------------------------
// Functions
import * as COMMON from '../../../lib/common'
import * as TXT from '../../../text/landing/header'

//------------------------------------------
// Static
import logo from '../../../static/vania-logo.png'


//=============================================================|0
//                    スタイル定義
//====================================================|2022_05_25
const styleAppBar = {
  background: "linear-gradient(to right, #123456, #4C718C)",
  boxShadow: "none",
  top: 0,
  zIndex: 1000
}

const styleContainer = {
  width: "95%",
  height: "6.25rem",
  display: "flex",
  alignItems: "center",
}

const styleToolBar = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  minHeight: "100px"
}

const styleButtonCommon = {
  margin: "0 20px",
  color: "white",
  fontWeight: "bold",
  transition: "all 0.25s",
  fontSize: "medium",
  "&:hover": {
    transform: "scale(1.15, 1.15)",
  }
}

const styleButtonSignUp = {
  margin: "0 1rem",
  backgroundImage: "linear-gradient(to right, #F09819 0%, #FF512F 51%, #F09819 100%)",
  borderRadius: "20px",
  fontWeight: "bold",
  transition: "all 0.25s",
  "&:hover": {
    backgroundImage: "linear-gradient(to right, #FF512F 0%, #F09819 51%, #FF512F 100%)",
    transform: "scale(1.15, 1.15)"
  }
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
  //------------------------------------------
  // 技術ブログへ遷移
  function accessTechBlog() {
    window.open('https://www.kengineer.dev/', '_blank');
  }
  //------------------------------------------
  // 開発者プロフィールへ遷移
  function accessDeveloperProfile() {
    window.open('https://www.kengineer.dev/pages/author/', '_blank');
  }

  return (
    <MUI.Box className="Header">
      {/* PC版 */}
      <MUI.AppBar position="fixed" sx={styleAppBar}>
        <MUI.Container maxWidth="xl" sx={styleContainer}>
          <MUI.Toolbar disableGutters sx={styleToolBar}>
            <MUI.Link href='#'>
              <img src={logo} height="50" alt="logo" />
            </MUI.Link>
            <MUI.Breadcrumbs color="white">
              <MUI.Button sx={styleButtonCommon}>
                {TXT.functions[lang]/* 機能紹介 */}
              </MUI.Button>
              <MUI.Button sx={styleButtonCommon}>
                {TXT.plans[lang]/* 料金プラン */}
              </MUI.Button>
              <MUI.Button sx={styleButtonCommon} onClick={accessTechBlog}>
                {TXT.techBlog[lang]/* 技術ブログ */}
              </MUI.Button>
              <MUI.Button sx={styleButtonCommon} onClick={accessDeveloperProfile}>
                {TXT.developerProfile[lang]/* 開発者プロフィール */}
              </MUI.Button>
              <MUI.Button sx={styleButtonCommon}>
                {TXT.signIn[lang]/* ログイン */}
              </MUI.Button>
              <MUI.Button
                variant="contained" sx={styleButtonSignUp}
                onClick={toggleSignUpFlag}
              >
                {TXT.signUp[lang]/* 無料トライアル */}
              </MUI.Button>
            </MUI.Breadcrumbs>
            <SignUpDialog />
          </MUI.Toolbar>
        </MUI.Container>
      </MUI.AppBar>
    </MUI.Box>
  )
}

//------------------------------------------
// export
export default Header
