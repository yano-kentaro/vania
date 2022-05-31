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
import * as RCL from 'recoil'
import { styled } from '@mui/material/styles'

//------------------------------------------
// Components
import * as MUI from '@mui/material'
import { SignUpDialog, signUpFlagState } from '../../landing/SignUpDialog'

//------------------------------------------
// Functions
import * as COMMON from 'src/lib/common'
import * as TXT from 'src/text/landing/header'

//------------------------------------------
// Tailwind CSS
import 'src/index.css'

//------------------------------------------
// Static
import logo from 'src/static/vania-logo.png'
import 'src/common.css'

//=============================================================|0
//                    スタイル定義
//====================================================|2022_05_25

//------------------------------------------
// AppBar
const AppBar = styled(MUI.AppBar) ({
  background: "linear-gradient(to right, #123456, #4C718C)",
  height: "6.25rem",
})

//------------------------------------------
// メニューボタン
const MenuButton = styled(MUI.Button) ({
  margin: "0 20px",
  color: "white",
  fontWeight: "bold",
  transition: "all 0.25s",
  fontSize: "medium",
  "&:hover": {
    transform: "scale(1.15, 1.15)",
  }
})

//------------------------------------------
// サインアップボタン
const SignUpButton = styled(MUI.Button) ({
  margin: "0 1rem",
  backgroundImage: "linear-gradient(to right, #F09819 0%, #FF512F 51%, #F09819 100%)",
  borderRadius: "20px",
  fontWeight: "bold",
  transition: "all 0.25s",
  "&:hover": {
    backgroundImage: "linear-gradient(to right, #FF512F 0%, #F09819 51%, #FF512F 100%)",
    transform: "scale(1.15, 1.15)"
  }
})

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
      <AppBar position="fixed" className="flex justify-center items-center">
        <MUI.Box className="flex justify-center h-full w-11-12">
          <MUI.Toolbar disableGutters className="flex justify-between w-full">
            <MUI.Link href='#'>
              <img src={logo} alt="VANIA" className="h-14" />
            </MUI.Link>
            <MUI.Breadcrumbs color="white">
              <MenuButton>
                {TXT.functions[lang]/* 機能紹介 */}
              </MenuButton>
              <MenuButton>
                {TXT.plans[lang]/* 料金プラン */}
              </MenuButton>
              <MenuButton onClick={accessTechBlog}>
                {TXT.techBlog[lang]/* 技術ブログ */}
              </MenuButton>
              <MenuButton onClick={accessDeveloperProfile}>
                {TXT.developerProfile[lang]/* 開発者プロフィール */}
              </MenuButton>
              <MenuButton>
                {TXT.signIn[lang]/* ログイン */}
              </MenuButton>
              <SignUpButton variant="contained" onClick={toggleSignUpFlag}>
                {TXT.signUp[lang]/* 無料トライアル */}
              </SignUpButton>
            </MUI.Breadcrumbs>
            <SignUpDialog />
          </MUI.Toolbar>
        </MUI.Box>
      </AppBar>
    </MUI.Box>
  )
}

//------------------------------------------
// export
export default Header
