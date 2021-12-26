import Layout from "../components/Layout"
import CardItem from "../components/CardItem"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="container">
          <div className="row">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>


      </Layout>
    </div>
  )
}
