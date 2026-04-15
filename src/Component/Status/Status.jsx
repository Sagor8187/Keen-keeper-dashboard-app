import React, { useContext } from 'react'
import { Mycontext } from '../Context/Datacontext'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function Status() {

  const {history} = useContext(Mycontext)

  const data = [
    { name: 'audio', value: history.filter(i => i.calling === 'audio').length },
    { name: 'text', value: history.filter(i => i.calling === 'text').length },
    { name: 'video', value: history.filter(i => i.calling === 'video').length },
  ].filter(item => item.value > 0);

  const COLORS_MAP = {
    audio: '#2D4F3F', 
    text: '#8B3DFF',  
    video: '#3BA764', 
  };

  return (
    <div>
      {
        history.length == 0?<h2 className='text-2xl font-bold text-center items-center my-10'> Your caling history is not available </h2>:<div>
          <div className='mx-10  space-y-3 '>
        <h2 className='text-2xl font-bold '>Friendship Analytics</h2>
        <p>By Interaction Type</p>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>

            {/* ✅ Tooltip add */}
            <Tooltip 
              formatter={(value, name) => [`${value}`, name.toUpperCase()]}
            />

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={8}
              cornerRadius={10}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS_MAP[entry.name]} />
              ))}
            </Pie>

            <Legend 
              verticalAlign="bottom" 
              align="center" 
              iconType="circle"
              formatter={(value) => (
                <span style={{ color: '#4A5568', textTransform: 'capitalize' }}>
                  {value}
                </span>
              )}
            />

          </PieChart>
        </ResponsiveContainer>
      </div>
        </div>
      }
    </div>
  )
}