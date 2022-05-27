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
    "en-US": "FUNCTIONS",
}

//------------------------------------------
// 料金プランボタン
const plans: {[key:string]: string} = {
    "ja": "料金プラン",
    "en": "PLANS",
    "en-US": "PLANS",
}

//------------------------------------------
// 技術ブログボタン
const techBlog: {[key:string]: string} = {
    "ja": "技術ブログ",
    "en": "TECH BLOG",
    "en-US": "TECH BLOG",
}

//------------------------------------------
// 開発者プロフィールボタン
const developerProfile: {[key:string]: string} = {
    "ja": "開発者プロフィール",
    "en": "DEVELOPER PROFILE",
    "en-US": "DEVELOPER PROFILE",
}

//------------------------------------------
// ログインボタン
const signIn: {[key:string]: string} = {
    "ja": "ログイン",
    "en": "SIGN IN",
    "en-US": "SIGN IN",
}

//------------------------------------------
// サインアップボタン
const signUp: {[key:string]: string} = {
    "ja": "無料トライアル",
    "en": "FREE TRIAL",
    "en-US": "FREE TRIAL",
}

//------------------------------------------
// export
export { functions, plans, techBlog, developerProfile, signIn, signUp }