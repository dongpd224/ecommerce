import Layout from "../components/Layout"
import CategoryTabBar from "../components/CategoryTabBar"
import CardList from '../components/CardList'
import Banner from "../components/Banner"
import SuggestionBar from "../components/SuggestionBar"

export default function Home({items}) {
  return (
    <div>
      <Layout>
        <CategoryTabBar />
        <Banner />
        <SuggestionBar />
        <div className="container">
          <CardList items={items}/>
        </div>
      </Layout>
    </div>
  )
}
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3000/api/items")
  const data = await resData.json()
  return{
      props: {
          items: data
      }
  }
}
