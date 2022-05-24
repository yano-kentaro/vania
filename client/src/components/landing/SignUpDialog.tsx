//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ SignUpDialog.tsx [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ ランディングページのサインアップダイアログ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//===================================================|0
//                    依存関係
//==========================================|2022_05_23

//------------------------------
// Modules
import { useState } from 'react'
import { getLang } from '../../lib/common'
import { dialogTitle, dialogText } from '../../msg/landing/signUpDialog'

//------------------------------
// components
import {
  DialogTitle, DialogContent, DialogContentText, TextField
} from '@mui/material'

//------------------------------
// css
import '../../css/landing/signUpDialog.css'

//------------------------------
// static

//===================================================|0
//                    コンポーネント定義
//==========================================|2022_05_23
function SignUpDialog() {
  //------------------------------
  // 言語設定
  const lang = getLang() // 言語設定取得
  //------------------------------
  // ダイアログ フラグ
  const [openFlag, setOpenFlag] = useState(false)
  const toggleSignUp = () => setOpenFlag(!openFlag)

  return (
    <div className='SignUpDialog'>
      <DialogTitle>{dialogTitle[lang]}</DialogTitle>
      <DialogContent>
        <DialogContentText className='white_space-pre_wrap mar-10px'>
          {dialogText[lang]}
        </DialogContentText>
        <TextField className='mar-10px wid-90' autoFocus label={"Group Name"} variant="standard" />
      </DialogContent>
    </div>
  )
}

//===================================================|0
//                    Export
//==========================================|2022_05_23
export { SignUpDialog }
