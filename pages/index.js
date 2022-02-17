import Layout from "../components/Layout"
import CardList from '../components/CardList'
import SuggestionBar from "../components/SuggestionBar"
import BannerSlider from "../components/BannerSlider"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  // Client side rendering
  const { data, error } = useSWR('../api/items', fetcher)

  if (error) return <div>Failed to load{console.log(error)}</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <Layout>
        <BannerSlider />
        <SuggestionBar />
        <div className="container">
          <CardList items={data} />
          {console.log(data)}
        </div>
      </Layout>
    </div>
  )
}
// export async function getServerSideProps() {
//   //${process.env.API_URL}
//   const resData = await fetch(`http://localhost:3001/api/items`)
//   const data = await resData.json()
//   return{
//       props: {
//           items: data
//       }
//   }
// }
