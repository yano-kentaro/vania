//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ pricing.ts [Ver.2022_05_28] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_28
//┃
//┃──┨ ランディングページ 料金プランの固定メッセージ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------------
// Plans
const plans: {[key: string]: string} = {
    "ja": "料金プラン",
    "en": "PLANS"
}

//------------------------------
// Plan
const plan: {[key: string]: string} = {
    "ja": "プラン",
    "en": "Plan"
}

//------------------------------
// メンバー
const member: {[key: string]: string} = {
    "ja": "メンバー",
    "en": "member"
}

//------------------------------
// メンバー数
const members: {[key: string]: string} = {
    "ja": "メンバー数",
    "en": "Members"
}

//------------------------------
// プロジェクト数
const projects: {[key: string]: string} = {
    "ja": "プロジェクト数",
    "en": "Projects"
}

//------------------------------
// カンバン機能
const kanban: {[key: string]: string} = {
    "ja": "カンバン",
    "en": "Kanban"
}

//------------------------------
// ガントチャート機能
const ganttChart: {[key: string]: string} = {
    "ja": "ガントチャート",
    "en": "Gantt chart"
}

//------------------------------
// カレンダー機能
const calendar: {[key: string]: string} = {
    "ja": "カレンダー",
    "en": "Calendar"
}

//------------------------------
// export
export {
    plans, plan, members, projects, member,
    kanban, ganttChart, calendar
}