import Layout from "../../../components/Layout";


function ItemDetail({resource}){
    const data  = resource[0]
    return(
        <div>
            <Layout>
                
            </Layout>
        </div>
    )
}
export async function getServerSideProps({params}) {
    const dataRes = await fetch(`http://localhost:3000/api/items/${params.id}`)
    const data = await dataRes.json();
    return {
        props :{
            resource : data
        }
    }
}
export default ItemDetail


