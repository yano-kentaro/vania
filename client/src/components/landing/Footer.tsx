//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Footer.tsx [Ver.2022_05_23] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_23
//┃
//┃──┨ ランディングページのフッター ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                          依存関係
//====================================================|2022_05_23

//------------------------------------------
// Modules
import { useState } from 'react'
import { getLang } from '../../lib/common'

//------------------------------------------
// Components

//------------------------------------------
// Static

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_05_23
function Footer() {
  //------------------------------------------
  // 言語設定
  const lang = getLang() // 言語設定取得

  return (
    <footer className="Footer">
      <h1>フッター</h1>
    </footer>
  )
}

//------------------------------------------
// export
export default Footer
