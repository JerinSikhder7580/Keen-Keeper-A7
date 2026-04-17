import React, { } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';
// import { useStackId } from 'recharts/types/cartesian/BarStack';

const Status = () => {
    const allStatus = JSON.parse(localStorage.getItem("timeline"))
    console.log(allStatus)

    // const [callCount, setCallCount] = useState(0)
    const callCount = allStatus.filter((status) => status.action === "Call").length
    const textCount = allStatus.filter((status) => status.action === "Text").length
    const videoCount = allStatus.filter((status) => status.action === "Video").length
    // const data = [callCount, textCount, videoCount]
    const data = [
        { name: "Call", value: callCount, fill: "#244d3f" },
        { name: "Text", value: textCount, fill: "#7f37f5" },
        { name: "Video", value: videoCount, fill: "#37a163" }
    ]

    console.log(data)
    return (
        <div>
            <section>
                <h1 className='text-5xl text-black mb-4 font-bold'>Friendship Analytics</h1>


                <div className='border border-slate-100 shadow  '>
                    <h1 className='text-[#4c6e63] text-left text-2xl font-semiboldbold p-4'>By Interaction Type</h1>
                    <div className='mx-auto w-125'>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} >
                            <Pie
                                data={data}
                                innerRadius={90}
                                outerRadius={120}
                                paddingAngle={5}
                                cornerRadius={10}
                                dataKey={"value"}
                            />
                            <Legend></Legend>
                            <Tooltip></Tooltip>
                            {/* <RechartsDevtools /> */}
                        </PieChart>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Status;