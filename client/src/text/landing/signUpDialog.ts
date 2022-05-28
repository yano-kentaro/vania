//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ signUpDialog.ts [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ ランディングページ サインアップ画面の固定メッセージ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const dialogTitle: {[key:string]: string} = {
    "ja": "グループを作る",
    "en": "CREATE GROUP",
}

const dialogText: {[key:string]: string} = {
    "ja": `グループを新たに作成します。\nグループのユーザーはGoogleアカウントで管理します。\nグループを作成したユーザーが、グループのオーナーになります。`,
    "en": `You can create a new group.\nUsers of the group will be managed by Google accounts.\nThe user who created the group becomes the owner of the group.`,
}

const cancelLabel: {[key:string]: string} = {
    "ja": "キャンセル",
    "en": "CANCEL",
}

const okLabel: {[key:string]: string} = {
    "ja": "決定",
    "en": "OK",
}

//------------------------------------------
// export
export { dialogTitle, dialogText, cancelLabel, okLabel }