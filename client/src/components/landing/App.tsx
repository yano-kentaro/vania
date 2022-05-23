//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ App.tsx [Ver.2022_05_22] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_22
//┃
//┃──┨ アプリトップ ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//===================================================|0
//                    依存関係
//==========================================|2022_05_22

//------------------------------
// Modules
import { useState } from 'react'

//------------------------------
// components
import Button from '@mui/material/Button'

//------------------------------
// css
import '../../css/App.css'

//------------------------------
// static
import logo from '../../static/logo.svg'

//===================================================|0
//                    メイン処理
//==========================================|2022_05_22
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <img src="../static/vania-logo.png" alt="test" />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>{import.meta.env.BASE_URL}</p>
        <p>{import.meta.env.DEV}</p>
        <p>{import.meta.env.MODE}</p>
        <p>{import.meta.env.PROD}</p>
        <p>{import.meta.env.SSR}</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          <Button variant="contained">Hello World</Button>
        </p>
      </header>
    </div>
  )
}

//===================================================|0
//                    Export
//==========================================|2022_05_22
export default App
