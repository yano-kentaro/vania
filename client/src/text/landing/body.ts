//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ body.ts [Ver.2022_05_28] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_28
//┃
//┃──┨ ランディングページ ヘッダーの固定メッセージ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------------
// キャッチコピー
const catchCopy: {[key:string]: string} = {
    "ja": `見方を変えれば\n見つかる課題がある`,
    "en": "Switching perspectives can find new problems."
}

//------------------------------
// サービス紹介
const description: {[key:string]: string} = {
    "ja": "1clickで表示形式を変更。同じ視点では気付きにくい課題や、業務の見落としを防ぐ、グループタスク管理ツール。",
    "en": "You can change the display format with a single click. This is a group task management tool that prevents issues that are difficult to notice from the same perspective or overlooking tasks."
}

//------------------------------
// サービス紹介
const signUp: {[key:string]: string} = {
    "ja": "無料トライアル",
    "en": "FREE TRIAL"
}

//------------------------------
// export
export { catchCopy, description, signUp }