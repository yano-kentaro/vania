//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ common.ts [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ 汎用関数 ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//===================================================|0
//                    言語設定取得
//==========================================|2022_05_23
function getLang(): string {
    const lang = (window.navigator.languages
                && window.navigator.languages[0])
                || window.navigator.language
    return lang
}

//===================================================|0
//                    export
//==========================================|2022_05_23
export { getLang }