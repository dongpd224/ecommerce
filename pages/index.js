import Layout from "../components/Layout"
import CardList from '../components/CardList'
import SuggestionBar from "../components/SuggestionBar"
import BannerSlider from "../components/BannerSlider"
import { useState, useEffect } from "react"


export default function Home({ items }) {
  return (
    <div>
      <Layout>
        <BannerSlider />
        <SuggestionBar />
        <div className="container">
          <CardList items={items} />
        </div>
      </Layout>
    </div>
  )
}
export async function getServerSideProps() {
  //${process.env.API_URL}
  const resData = await fetch(`http://localhost:3001/api/items`)
  const data = await resData.json()
  return{
      props: {
          items: data
      }
  }
}
