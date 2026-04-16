import { useState } from 'react';
import FriendContext from '../../context/FriendContext';

const TimeLine = () => {
    const initialValue = JSON.parse(localStorage.getItem("timeline"))

    const [timeline, setTimeline] = useState(initialValue)

    // const timeline =

    const handleFilter = (e) => {
        console.log(e.target.value)

        const filteredValue = initialValue.filter((value) => value.action === e.target.value) // call
        setTimeline(filteredValue)

    }


    return (
        <div>
            <section>
                <h1>Timeline</h1>
                <select onChange={handleFilter} className='select w-full md:w-100' defaultValue={"Filter"}>
                    <option value="" disabled>Filter</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
                <div>
                    {
                        timeline.map((data) =>
                            <div>
                                <div className='flex gap-3 border border-gray-300 shadow p-3 mb-2 items-center mt-2'>
                                    <img src={data.img} alt="" />
                                    <div>
                                        <h1 className='font-bold text-xl'>{data.action} <span className='text-gray-500'>with{data.name}</span></h1>
                                        <p className='text-gray-500'>{data.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </section>
        </div>
    );
};

export default TimeLine;