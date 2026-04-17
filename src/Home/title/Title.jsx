import { Plus } from 'lucide-react';
import React from 'react';

const Title = () => {
    return (
        <div>
            <section className='mx-auto '>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold '>Friends to keep close in your life</h1>
                    <p className='text-gray-500  py-5 '>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>

                    <button className='bg-[#244d3f] text-white btn'><Plus /> Add a Friend</button>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 justify-between gap-4 text-center  my-6 pb-5 border-b border-b-gray-300'>
                    <div className='border border-gray-300 p-8 text-center rounded-md shadow bg-white'>
                        <h1 className='text-2xl font-bold'>8</h1>
                        <p className='text-gray-500'>Total Friend</p>
                    </div>

                    <div className='border border-gray-300 p-8 text-center rounded-md shadow bg-white'>
                        <h1 className='text-2xl font-bold'>2</h1>
                        <p className='text-gray-500'>On Truck</p>
                    </div>

                    <div className='border border-gray-300 p-8 text-center rounded-md shadow bg-white'>
                        <h1 className='text-2xl font-bold'>6</h1>
                        <p className='text-gray-500'>Need Attention</p>
                    </div>

                    <div className='border border-gray-300 p-8 text-center rounded-md shadow bg-white'>
                        <h1 className='text-2xl font-bold'>12</h1>
                        <p className='text-gray-500'>Interactions This Month</p>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Title;