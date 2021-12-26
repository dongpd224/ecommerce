import Layout from "../components/Layout"
import CardItem from "../components/CardItem"
import CardList from '../components/CardList'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="container">
          <CardList />
        </div>


      </Layout>
    </div>
  )
}
