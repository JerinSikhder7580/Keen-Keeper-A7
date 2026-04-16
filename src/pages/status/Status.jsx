import React, { } from 'react';
import { Pie, PieChart } from 'recharts';
// import { useStackId } from 'recharts/types/cartesian/BarStack';

const Status = () => {
    const allStatus = JSON.parse(localStorage.getItem("timeline"))

    // const [callCount, setCallCount] = useState(0)
    const callCount = allStatus.filter((status) => status.action === "Call")

    console.log(callCount)
    return (
        <div>
            <h1 className='text-5xl text-black'>Friendship Analytics</h1>
            <div className='bg-gray-100 p-7'>
                <PieChart style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
                    responsive>
                    <Pie data={callCount}></Pie>
                    <Pie></Pie>
                    <Pie></Pie>

                </PieChart>


            </div>

        </div>
    );
};

export default Status;