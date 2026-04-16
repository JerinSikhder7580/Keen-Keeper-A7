import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Friends = () => {

    const [friends, setFriends] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/FriendsData.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data)
                setLoading(false)
            })
    }, [])


    const handleBackgroundColor = (status) => {

        if (status === "overdue") {
            return "bg-red-500"
        }
        else if (status === "Almost due") {
            return "bg-yellow-600"
        }
        else {
            return "bg-green-900"
        }



    }

    return (
        <div>
            <div>

                <section className='mx-auto'>
                    <div className='text-center '>
                        <h1 className='text-2xl font-semibold mb-5 '>Your Friend</h1>

                        <div  className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 '>
                            {loading && <span className="loading loading-spinner text-info "></span>}
                            {
                                friends?.map((friend) =>
                                    <Link key={friend.id} to={`details/${friend.id}`} className='bg-white shadow rounded-md p-6 wrap-anywhere space-y-2'>

                                        <img className='rounded-full mx-auto w-20' src={friend.picture} alt="" />
                                        <h1 className='text-xl font-bold'>{friend.name}</h1>
                                        <p className='text-gray-500'>{friend.days_since_contact}day ago</p>

                                        <div className=' md:flex lg:gap-3 lg:flex md:gap-3 justify-center items-center  p-2'>
                                            {
                                                friend.tags.map((tag) =>
                                                    <p className='bg-[#cbfadb] text-black rounded-full px-3 mb-2 md:mb-0'>{tag.toUpperCase()}</p>)
                                            }
                                        </div>

                                        <span className={`text-white px-2 py-1 rounded-full ${handleBackgroundColor(friend.status)}`}>{friend.status}</span>

                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Friends;