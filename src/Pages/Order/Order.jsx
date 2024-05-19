import React, { useState } from 'react';
import Cover from '../OurMenu/Cover/Cover';
import orderbg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import CartCard from '../../Component/CartCard/CartCard';
import { useParams } from 'react-router-dom';
import OrderTab from './OrderTab/OrderTab';

const Order = () => {

    const categorys = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categorys.indexOf(category)
    const[tabIndex,setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <>
        <Cover bg={orderbg} bgColor='rgba(21,21,21,0.60)' heading='OUR SHOP' description='Would you like to try a dish?' />
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <div className='my-10 container mx-auto flex justify-center'>
            <TabList>
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUP</Tab>
                <Tab>DESSERTS</Tab>
                <Tab>DRINKS</Tab>
            </TabList>
            </div>
            <TabPanel>
                {/* <div className="grid grid-cols-3 gap-6 container mx-auto mt-20">
                    {
                        salad && salad.map(items => <CartCard key={items._id} items={items} />)
                    }
                </div> */}
                <OrderTab items={salad} />
            </TabPanel>
            <TabPanel>
            {/* <div className="grid grid-cols-3 gap-6 container mx-auto mt-20">
                    {
                        pizza && pizza.map(items => <CartCard key={items._id} items={items} />)
                    }
                </div> */}
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
            {/* <div className="grid grid-cols-3 gap-6 container mx-auto mt-20">
                    {
                        soup && soup.map(items => <CartCard key={items._id} items={items} />)
                    }
                </div> */}
                <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
            {/* <div className="grid grid-cols-3 gap-6 container mx-auto mt-20">
                    {
                        dessert && dessert.map(items => <CartCard key={items._id} items={items} />)
                    }
                </div> */}
                <OrderTab items={dessert}/>
            </TabPanel>
            <TabPanel>
            {/* <div className="grid grid-cols-3 gap-6 container mx-auto mt-20">
                    {
                       drinks &&drinks.map(items => <CartCard key={items._id} items={items} />)
                    }
                </div> */}
                <OrderTab items={drinks}/>
            </TabPanel>
        </Tabs> 
        </>
    );
};

export default Order;