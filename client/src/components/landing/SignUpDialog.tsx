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
// import { useState } from 'react'
import { atom, selector, useRecoilState } from 'recoil'
import { getLang } from '../../lib/common'
import {
  dialogTitle, dialogText, cancelLabel, okLabel
} from '../../msg/landing/signUpDialog'

//------------------------------
// components
import {
  Dialog as MUIDialog,
  DialogTitle as MUIDialogTitle,
  DialogContent as MUIDialogContent,
  DialogContentText as MUIDialogContentText,
  DialogActions as MUIDialogActions,
  Button as MUIButton,
  TextField as MUITextField
} from '@mui/material'

//------------------------------
// static

//===================================================|0
//                    スタイル定義
//==========================================|2022_05_25

const styleContentText = {
  "white-space": "pre-wrap"
}

const styleTextField = {
  "margin": "10px",
  "width": "90%"
}

//===================================================|0
//                    状態管理定義
//==========================================|2022_05_25

//------------------------------
// ダイアログフラグ
const signUpFlagState = atom({
  key: 'signUpFlagState',
  default: false
})

//===================================================|0
//                    コンポーネント定義
//==========================================|2022_05_23
function SignUpDialog() {
  //------------------------------
  // 言語設定
  const lang = getLang() // 言語設定取得
  //------------------------------
  // ダイアログ フラグ
  const [signUpFlag, setSignUpFlag] = useRecoilState(signUpFlagState)
  const toggleSignUpFlag = () => setSignUpFlag(!signUpFlag)

  return (
    <MUIDialog className='SignUpDialog' open={signUpFlag}>
      <MUIDialogTitle>{dialogTitle[lang]}</MUIDialogTitle>
      <MUIDialogContent>
        <MUIDialogContentText sx={styleContentText}>
          {dialogText[lang]}
        </MUIDialogContentText>
        <MUITextField sx={styleTextField} autoFocus label={"Group Name"} variant="standard" />
      </MUIDialogContent>
      <MUIDialogActions>
        <MUIButton onClick={toggleSignUpFlag}>{cancelLabel[lang]/* キャンセル */}</MUIButton>
        <MUIButton onClick={toggleSignUpFlag}>{okLabel[lang]/* 決定 */}</MUIButton>
      </MUIDialogActions>
    </MUIDialog>
  )
}

//===================================================|0
//                    Export
//==========================================|2022_05_23
export { SignUpDialog, signUpFlagState }
