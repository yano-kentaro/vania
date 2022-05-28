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
// 機能紹介ボタン
const functions: {[key:string]: string} = {
    "ja": "機能紹介",
    "en": "FUNCTIONS",
}

//------------------------------------------
// 料金プランボタン
const plans: {[key:string]: string} = {
    "ja": "料金プラン",
    "en": "PLANS",
}

//------------------------------------------
// 技術ブログボタン
const techBlog: {[key:string]: string} = {
    "ja": "技術ブログ",
    "en": "TECH BLOG",
}

//------------------------------------------
// 開発者プロフィールボタン
const developerProfile: {[key:string]: string} = {
    "ja": "開発者プロフィール",
    "en": "DEVELOPER PROFILE",
}

//------------------------------------------
// ログインボタン
const signIn: {[key:string]: string} = {
    "ja": "ログイン",
    "en": "SIGN IN",
}

//------------------------------------------
// サインアップボタン
const signUp: {[key:string]: string} = {
    "ja": "無料トライアル",
    "en": "FREE TRIAL",
}

//------------------------------------------
// export
export { functions, plans, techBlog, developerProfile, signIn, signUp }