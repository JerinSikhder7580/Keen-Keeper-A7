import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Archive, Bell, MessageSquareMore, PhoneCall, Trash2 } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import FriendContext from '../context/FriendContext';
import { format } from 'date-fns';

const FriendDetails = () => {

    const { id } = useParams()

    const [friend, setFriend] = useState()
    useEffect(() => {
        fetch("/FriendsData.json")
            .then(res => res.json())
            .then(data => {
                const particularFriend = data.find(f => f.id == id)
                setFriend(particularFriend)
            })
    }, [id])
    console.log(friend)

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

    const notify = (action) => {
        let obj = {}
        if (action === "Call") {
            obj.img = "/call.png"
        }
        else if (action === 'Text') {
            obj.img = "/text.png"
        }
        else if (action === 'Video') {
            obj.img = "/video.png"
        }
        obj.name = friend.name

        obj.date = format(new Date(), "PP")
        obj.action = action

        const oldData = JSON.parse(localStorage.getItem("timeline"))
        console.log(oldData)
        if (oldData) {
            oldData.push(obj)
            localStorage.setItem("timeline", JSON.stringify(oldData))

        }
        else {
            localStorage.setItem("timeline", JSON.stringify([obj]))

        }



        console.log(obj)

        toast.success(`${action} with ${friend.name}`)



    }


    return (
        <div>
            <ToastContainer position='top-center'></ToastContainer>

            <div>


                <section>
                    <div >
                        {
                            friend &&
                            <div className='block sm:grid sm:space-y-0 space-y-5  grid-cols-5 gap-5 *:border *:border-gray-100 *:shadow'>
                                <div className='col-span-2 row-span-2 text-center p-3 space-y-1'>
                                    <img className='mx-auto rounded-full' src={friend.picture} alt="" />
                                    <h1 className='font-bold text-xl'>{friend.name}</h1>
                                    <span className={`text-white px-2 py-1 rounded-full ${handleBackgroundColor(friend.status)}`}>{friend.status}</span>
                                    <div className='flex gap-3 justify-center mt-3'>
                                        {
                                            friend.tags.map((tag, index) =>
                                                <p key={index} className='bg-[#cbfadb] text-black rounded-full px-3'>{tag.toUpperCase()}</p>)
                                        }
                                    </div>
                                    <p className='text-gray-500'>"{friend.bio}"</p>
                                    <p className='text-gray-500'>{friend.email}</p>
                                </div>

                                <div className=' flex flex-col items-center justify-center'>
                                    <h1 className='text-3xl font-bold'>{friend.days_since_contact}</h1>
                                    <p className='text-gray-500 text-center'>Days Since Contact</p>
                                </div>

                                <div className=' flex flex-col items-center justify-center'>
                                    <h1 className='text-3xl font-bold'>{friend.goal}</h1>
                                    <p className='text-gray-500'>Goal(Days)</p>
                                </div>

                                <div className=' flex flex-col items-center justify-center '>
                                    <h1 className='text-3xl font-bold text-center'><span>{format(new Date(friend.next_due_date),"PP")}</span></h1>
                                    <p className='text-gray-500'>Next Due</p>
                                </div>

                                <div className='col-span-3 p-3 '>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-[#244d3f] font-semibold text-xl mb-6'>Relationship Goal</h1>
                                            <p className='text-gray-500 font-semibold'>Connect every <span className='font-bold text-black'>30 Days</span></p>

                                        </div>
                                        <button className='btn'>Edit</button>
                                    </div>
                                </div>
                                <div className=' col-span-2 row-span-2 space-y-3'>
                                    <button className="btn  w-full mt-4"><Bell /> Snooze 2 weeks</button>
                                    <button className="btn w-full"><Archive /> Archive</button>
                                    <button className="btn w-full text-red-600"><Trash2 /> Delete</button>
                                </div>
                                <div className='col-span-3'>
                                    <h1 className='text-[#244d3f] text-center md:text-left font-semibold text-xl p-6'>Quick Check-In</h1>
                                    <div className='flex  justify-center  md:justify-around p-3 '>
                                        <button className='bg-gray-200 w-1/3  rounded py-5 border border-gray-100  flex sm:flex-col items-center justify-center gap-2' onClick={() => notify("Call")}><PhoneCall /><span>Call</span></button>
                                        <button className='bg-gray-200 w-1/3  rounded py-5 border border-gray-100  flex sm:flex-col items-center justify-center gap-2' onClick={() => notify("Text")}><MessageSquareMore />Text</button>
                                        <button className='bg-gray-200 w-1/3  rounded py-5 border border-gray-100  flex sm:flex-col items-center justify-center gap-2' onClick={() => notify("Video")}> <MessageSquareMore />Video</button>
                                    </div>
                                </div>
                            </div>


                        }
                    </div>

                </section>


            </div>
        </div>
    );
};

export default FriendDetails;