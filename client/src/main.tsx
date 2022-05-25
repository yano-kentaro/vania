//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ main.tsx [Ver.2022_05_22] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_22
//┃
//┃──┨ main ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                          依存関係
//====================================================|2022_05_22

//------------------------------------------
// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

//------------------------------------------
// Components
import Layout from './components/landing/Layout'

//------------------------------------------
// CSS
import './index.css'

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_05_22
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  </React.StrictMode>
)
