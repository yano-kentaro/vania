//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ header.ts [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ ランディングページ ヘッダーの固定メッセージ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------------------------
// ログインボタン
const signIn: {[key:string]: string} = {
    "ja": "ログイン",
    "en": "SIGN IN",
    "en-US": "SIGN IN",
}

const signUp: {[key:string]: string} = {
    "ja": "グループを作る",
    "en": "CREATE GROUP",
    "en-US": "CREATE GROUP",
}

//------------------------------------------
// export
export { signIn, signUp }