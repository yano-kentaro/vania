//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ SignUpDialog.tsx [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ ランディングページのサインアップダイアログ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                          依存関係
//====================================================|2022_05_23

//------------------------------------------
// Modules
import * as RCL from 'recoil'

//------------------------------------------
// Components
import * as MUI from '@mui/material'

//------------------------------------------
// Functions
import * as COMMON from '../../lib/common'

//------------------------------------------
// Text messages
import * as MSG from '../../msg/landing/signUpDialog'

//------------------------------------------
// Static

//=============================================================|0
//                    スタイル定義
//====================================================|2022_05_25

const styleContentText = {
  "white-space": "pre-wrap"
}

const styleTextField = {
  "margin": "10px",
  "width": "90%"
}

//=============================================================|0
//                    状態管理定義
//====================================================|2022_05_25

//------------------------------------------
// ダイアログフラグ
const signUpFlagState = RCL.atom({
  key: 'signUpFlagState',
  default: false
})

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_05_23
function SignUpDialog() {
  //------------------------------------------
  // 言語設定
  const lang = COMMON.getLang() // 言語設定取得
  //------------------------------------------
  // ダイアログ フラグ
  const [signUpFlag, setSignUpFlag] = RCL.useRecoilState(signUpFlagState)
  const toggleSignUpFlag = () => setSignUpFlag(!signUpFlag)

  return (
    <MUI.Dialog className='SignUpDialog' open={signUpFlag}>
      <MUI.DialogTitle>{MSG.dialogTitle[lang]}</MUI.DialogTitle>
      <MUI.DialogContent>
        <MUI.DialogContentText sx={styleContentText}>
          {MSG.dialogText[lang]/* 説明文 */}
        </MUI.DialogContentText>
        <MUI.TextField
          label={"Group Name"} variant="standard"
          autoFocus sx={styleTextField}
        />
      </MUI.DialogContent>
      <MUI.DialogActions>
        <MUI.Button onClick={toggleSignUpFlag}>
          {MSG.cancelLabel[lang]/* キャンセル */}
        </MUI.Button>
        <MUI.Button onClick={toggleSignUpFlag}>
          {MSG.okLabel[lang]/* 決定 */}
        </MUI.Button>
      </MUI.DialogActions>
    </MUI.Dialog>
  )
}

//------------------------------------------
// export
export { SignUpDialog, signUpFlagState }
