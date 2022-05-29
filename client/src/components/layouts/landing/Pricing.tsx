//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ Pricing.tsx [Ver.2022_05_28] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_05_28
//┃
//┃──┨ ランディングページのプラン価格設定 ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_05_28

//------------------------------------------
// Modules
import * as RCL from 'recoil'
import { styled } from '@mui/material/styles'

//------------------------------------------
// Components
import * as MUI from '@mui/material'

//------------------------------------------
// Functions
import * as COMMON from 'src/lib/common'
import { type } from 'os'

//------------------------------------------
// Text
import * as TXT from 'src/text/landing/pricing'
import { fontWeight } from '@mui/system'

//------------------------------------------
// Static
import bgImg from 'src/static/bg-lightblue-cloud.png'

//=============================================================|0
//                         スタイル定義
//====================================================|2022_05_28

// const CardHeader = styled(MUI.CardHeader) ({
//   fontWeight: 700,
// })

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_05_28
function Pricing() {
  //------------------------------------------
  // 言語設定
  const lang = COMMON.getLang() // 言語設定取得

  type Plan = {
    id: number;
    name: string;
    color: string;
    price: number;
    min_users: number;
    max_users: number;
    max_projects: number;
    kanban: boolean;
    calendar: boolean;
    gantt_chart: boolean;
  }

  const rows: string[] = [
    TXT.members[lang],
    TXT.projects[lang],
    TXT.kanban[lang],
    TXT.ganttChart[lang],
    TXT.calendar[lang],
  ]

  const plans: Plan[] = [
    {
      id: 1,
      name: "Free",
      color: "#A4A4A4",
      price: 0,
      min_users: 1,
      max_users: 2,
      max_projects: 1,
      kanban: true,
      calendar: false,
      gantt_chart: false
    },
    {
      id: 2,
      name: "Standard",
      color: "#3179C0",
      price: 5,
      min_users: 5,
      max_users: 20,
      max_projects: 5,
      kanban: true,
      calendar: true,
      gantt_chart: true
    },
    {
      id: 3,
      name: "Enterprise",
      color: "#40C3A3",
      price: 20,
      min_users: 5,
      max_users: 100,
      max_projects: 10,
      kanban: true,
      calendar: true,
      gantt_chart: true
    },
  ]

  return (
    <MUI.Box className="Pricing" sx={{backgroundImage: `url(${bgImg})`, backgroundSize: "250%"}}>
      <MUI.Container sx={{mb: 5}}>
        <MUI.Typography variant="h3" fontWeight={"bold"}>
          {TXT.plans[lang]}
        </MUI.Typography>
      </MUI.Container>
      <MUI.Container className="h-screen">
        <MUI.Grid container spacing={5} alignItems="flex-end">
            {
              plans.map((plan) => (
                <MUI.Grid item md={4}>
                  <MUI.Card sx={{padding: 2}}>
                    <MUI.CardHeader
                      title={`${plan.name} ${TXT.plan[lang]}`}
                      titleTypographyProps={{fontWeight: "bold", color: plan.color}}
                    >
                    </MUI.CardHeader>
                    <MUI.CardContent className="flex" sx={{alignItems: "baseline", justifyContent: "space-around"}}>
                      <MUI.Typography variant="h2" sx={{fontWeight: "bold"}}>
                        {`$${plan.price}`}
                      </MUI.Typography>
                      <MUI.Typography variant="h5" sx={{fontWeight: "bold"}}>
                        {`/ ${TXT.member[lang]}`}
                      </MUI.Typography>
                    </MUI.CardContent>
                      {
                        rows.map((row) => (
                          <MUI.Grid container sx={{borderTop: "1px dotted black"}}>
                            <MUI.Grid item md={7.5}>
                              <MUI.CardContent>
                                <MUI.Typography variant="h6" sx={{fontWeight: "bold", color: plan.color}}>
                                  {row}
                                </MUI.Typography>
                              </MUI.CardContent>
                            </MUI.Grid>
                            <MUI.Grid item md={4.5}>
                              <MUI.CardContent>
                                <MUI.Typography variant="h6" sx={{fontWeight: "bold"}}>
                                  {"後で編集"}
                                </MUI.Typography>
                              </MUI.CardContent>
                            </MUI.Grid>
                            </MUI.Grid>
                        ))
                      }
                  </MUI.Card>
                </MUI.Grid>
              ))
            }
        </MUI.Grid>
      </MUI.Container>
    </MUI.Box>
  )
}

//=============================================================|0
//                    Export
//====================================================|2022_05_28
export default Pricing
