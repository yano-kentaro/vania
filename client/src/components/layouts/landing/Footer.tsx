//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Footer.tsx [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ ランディングページのフッター ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                          依存関係
//====================================================|2022_05_23

//------------------------------------------
// Modules
import { useState } from 'react'
import { getLang } from 'src/lib/common'

//------------------------------------------
// Components
import * as MUI from '@mui/material'

//------------------------------------------
// Static

//=============================================================|0
//                         スタイル定義
//====================================================|2022_05_28
const styleButtonCommon = {
  color: "white",
  fontWeight: "bold",
}

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_05_23
function Footer() {
  //------------------------------------------
  // 言語設定
  const lang = getLang() // 言語設定取得

  return (
    <MUI.Box className="Footer">
      <MUI.AppBar position="static" sx={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", top: "auto", bottom: 0}}>
        <MUI.Toolbar sx={{width: "95%", borderBottom: "1px solid gray", display: "flex", justifyContent: "center"}}>
          <MUI.Breadcrumbs color="white" separator="">
            <MUI.Button sx={styleButtonCommon}>
              利用規約
            </MUI.Button>
            <MUI.Button sx={styleButtonCommon}>
              サイトマップ
            </MUI.Button>
            <MUI.Button sx={styleButtonCommon}>
              プライバシーポリシー
            </MUI.Button>
            <MUI.Button sx={styleButtonCommon}>
              個人情報の取り扱いについて
            </MUI.Button>
            <MUI.Button sx={styleButtonCommon}>
              お問合せ
            </MUI.Button>
            <MUI.Button sx={styleButtonCommon}>
              ヘルプ
            </MUI.Button>
          </MUI.Breadcrumbs>
        </MUI.Toolbar>
      </MUI.AppBar>
      <MUI.AppBar position="static" sx={{backgroundColor: "black", top: "auto", bottom: 0}}>
        <MUI.Toolbar sx={{display: "flex", justifyContent: "center"}}>
          <MUI.Typography  variant="h6">
            © 2022 yano-kentaro
          </MUI.Typography>
        </MUI.Toolbar>
      </MUI.AppBar>
    </MUI.Box>
  )
}

//------------------------------------------
// export
export default Footer
