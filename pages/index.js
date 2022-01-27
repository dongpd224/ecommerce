import Layout from "../components/Layout"
import CardList from '../components/CardList'
import Banner from "../components/Banner"
import SuggestionBar from "../components/SuggestionBar"

export default function Home({items}) {
  return (
    <div>
      <Layout>
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
  const resData = await fetch(`${process.env.API_URL}/items`)
  const data = await resData.json()
  return{
      props: {
          items: data
      }
  }
}
