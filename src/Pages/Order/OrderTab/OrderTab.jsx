import CartCard from "../../../Component/CartCard/CartCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-6 container mx-auto mt-20">
                    {
                        items && items.map(item => <CartCard key={item._id} items={item} />)
                    }
        </div>
    );
};

export default OrderTab;