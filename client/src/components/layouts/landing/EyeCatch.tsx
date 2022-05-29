//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ EyeCatch.tsx [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ ランディングページのボディ ┃
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
// Text
import * as TXT from 'src/text/landing/body'

//------------------------------------------
// Static

//=============================================================|0
//                    スタイル定義
//====================================================|2022_05_25
const outer = {
  background: "linear-gradient(to right, #123456, #4C718C)",
}

const small = {
}

const large = {
}

const styleUpperLeft = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center"
}

const styleCatchCopy = {
  fontWeight: "bold",
  color: "#FFFFFF",
  whiteSpace: "pre-wrap",
}

const styleButtonSignUp = {
  height: "5rem",
  width: "20rem",
  margin: "0 1rem",
  fontSize: "1.5rem",
  backgroundImage: "linear-gradient(to right, #F09819 0%, #FF512F 51%, #F09819 100%)",
  borderRadius: "2.5rem",
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
function EyeCatch() {
  //------------------------------------------
  // 言語設定
  const lang = getLang() // 言語設定取得

  return (
    <MUI.Grid className="EyeCatch" container height={"80vh"} sx={outer}>
      <MUI.Grid md={6} sx={small}>
        <MUI.Box sx={styleUpperLeft}>
          <MUI.Box margin={4}>
            <MUI.Typography variant="h2" sx={styleCatchCopy}>
              {TXT.catchCopy[lang]/* キャッチコピー */}
            </MUI.Typography>
          </MUI.Box>
          <MUI.Box margin={4}>
            <MUI.Typography variant="h5" sx={styleCatchCopy}>
              {TXT.description[lang]/* サービス紹介 */}
            </MUI.Typography>
          </MUI.Box>
          <MUI.Box margin={4} sx={{display: "flex", justifyContent: "center", }}>
            <MUI.Button variant="contained" size="large" sx={styleButtonSignUp}>
              {TXT.signUp[lang]/* 無料トライアル */}
            </MUI.Button>
          </MUI.Box>
        </MUI.Box>
      </MUI.Grid>
      <MUI.Grid md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <MUI.Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <MUI.Typography variant="h1" sx={styleCatchCopy}>
            後で画像貼る
          </MUI.Typography>
        </MUI.Box>
      </MUI.Grid>
    </MUI.Grid>
  )
}

//------------------------------------------
// export
export default EyeCatch
