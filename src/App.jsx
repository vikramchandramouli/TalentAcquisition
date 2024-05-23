import React from "react"
import {Layout} from 'antd'
import Headers from "./components/header/headers"
import Sidebar from "./components/sidebar/sidebar"
import { Content } from "antd/es/layout/layout"

function App() {
  return (
    <>
      <Layout>
       <Headers/>
       <Sidebar/>
       </Layout>

    </>
  )
}

export default App
