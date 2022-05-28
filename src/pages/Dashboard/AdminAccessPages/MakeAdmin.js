import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../additional/FirebaseConfig';
import Loading from '../../../additional/Loading';

const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth) // current User
    const navigate = useNavigate()

    // Load the Profile info
    const { data : users, isLoading, refetch } = useQuery(['usersData', user], () => 
    fetch(`https://calm-retreat-24478.herokuapp.com/allusers`)
    .then(res => res.json())
    )
    if (loading || isLoading) {
        return <Loading></Loading>
    }
     // handle user add to admin 
     const handleAdmin = (adminUser) => {
         console.log(adminUser?.email);

        fetch(`https://calm-retreat-24478.herokuapp.com/user/admin/${adminUser?.email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res?.status === 403) {
                    toast('You Dont Have Permission To This Oparation')
                    return
                };
                return res.json()
            })
            .then(data => {
                if (data?.modifiedCount > 0) {
                    refetch()
                    toast('Admin Conform')
                    console.log(data);
                }
                
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h1>Make Admin: {users?.length}</h1>
            <div className=" px-6 lg:px-20">
                <div class="overflow-x-auto w-full">
                    <table class="table lg:w-1/2 mx-auto border-collapse border border-primary">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th className='border border-primary px-1'>Index</th>
                                <th className='border border-primary'>User Info</th>
                                <th className='text-center border border-primary'>Manage Purchases</th>
                            </tr>
                        </thead>

                        <tbody>
                    {
                        users?.map((user, index) =>
                            <tr  key={user._id} >
                                <th className="border border-primary">{index + 1}</th>
                                <td className="border border-primary py-0">
                                    <div class=" flex flex-col justify-center items-start ">
                                        <h1>{user.email}</h1>
                                        <h1 class="font-bold ">{user.name}</h1>
                                    </div>
                                </td>
                                        
                                
                                <th className="border border-primary">
                                    <div class="flex justify-center">   
                                        {
                                            user?.role === "admin" ?
                                                <p className='text-xl text-secondary'>Admin</p>
                                                :
                                                <button
                                                    onClick={()=>handleAdmin(user)}
                                                    className=' className="btn p-2 bg-primary rounded border-2 border-primary hover:bg-white text-white hover:text-primary'>
                                                    Make Admin
                                                </button> 
                                        }   
                                    </div>
                                </th>
                            </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>                                
            </div>
        </div>
    );
};

export default MakeAdmin;