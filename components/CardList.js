import CardItem from "./CardItem";

function CardList({items}) {
    return (
        <div className="row">
                {/* <CardItem responsive="col-lg-2 col-md-3 col-sm-6"/>
                <CardItem responsive="col-lg-2 col-md-3 col-sm-6"/>
                <CardItem responsive="col-lg-2 col-md-3 col-sm-6"/>
                <CardItem responsive="col-lg-2 col-md-3 col-sm-6"/>
                <CardItem responsive="col-lg-2 col-md-3 col-sm-6"/>
                <CardItem responsive="col-lg-2 col-md-3 col-sm-6"/>
                <CardItem responsive="col-lg-2 col-md-3 col-sm-6"/> */}
               {items.map(item=>(
                   <CardItem key={item} responsive="col-lg-2 col-md-3 col-sm-6" data={item} />
               ))}
        </div>

    )
}
export default CardList