import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import { GiCook } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import React from 'react';
import  { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const {data:adminStates ={} } = useQuery({
    queryKey:['admin-states'],
    queryFn:async()=> {
      const res = await axiosSecure.get('/admin-states')
      return res.data
    }
  })

  const {data:chartData} = useQuery({
    queryKey:['order-states'],
    queryFn:async()=>{
      const res = await axiosSecure.get('/order-states')
      return res.data
    }
  })
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const paichartData = chartData.map(data => {
  return { name :data.category ,value:data.totalRevenue}
})

  return (
    <section className="p-5">
      <h1>HI! Welcome Back </h1>
      <p>{user?.displayName}</p>
      <div className="grid grid-cols-4 gap-x-5">
        <div className="bg-blue-400 gap-x-5 p-6 rounded-xl font-semibold text-white flex justify-center items-center">
          <div className="">
            <FaWallet className="text-8xl" />
          </div>
          <div>
            <p className="text-4xl">${adminStates && adminStates.totalRevenue}</p>
            <p>Revenue</p>
          </div>
        </div>
        <div className="bg-blue-400 gap-x-5 p-6 rounded-xl font-semibold text-white flex justify-center items-center">
          <div className="">
            <FaUsers className="text-8xl" />
          </div>
          <div>
            <p className="text-4xl">{adminStates && adminStates.users}</p>
            <p>Customers</p>
          </div>
        </div>
        <div className="bg-blue-400 gap-x-5 p-6 rounded-xl font-semibold text-white flex justify-center items-center">
          <div className="">
            <GiCook className="text-8xl" />
          </div>
          <div>
            <p className="text-4xl">{adminStates && adminStates.menuItems}</p>
            <p>Products</p>
          </div>
        </div>
        <div className="bg-blue-400 gap-x-5 p-6 rounded-xl font-semibold text-white flex justify-center items-center">
          <div className="">
            <FaTruck className="text-8xl" />
          </div>
          <div>
            <p className="text-4xl">{adminStates && adminStates.orders}</p>
            <p>Order</p>
          </div>
        </div>
      </div>
      <div>
        <div>
        <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={paichartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {paichartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend/>
        </PieChart>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
