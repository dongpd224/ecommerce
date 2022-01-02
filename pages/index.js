import Layout from "../components/Layout"
import CardItem from "../components/CardItem"
import CardList from '../components/CardList'

export default function Home({items}) {
  return (
    <div>
      <Layout>
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
