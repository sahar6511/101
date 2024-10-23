import React, { useState } from 'react';
import { useGetLimitRoomsQuery,useDeleteRoomMutation } from '../redux/services/roomsApi';

const ShowAllRooms = () => {
  const[page,setPage] = useState(1)
  const { data: rooms, error, isLoding } = useGetLimitRoomsQuery(page);
  const[selectedRoom,setSelectedRoom] = useState(null)
  const[deleteRoom] = useDeleteRoomMutation()
  return (
    <div className='showallromms'>
    
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ?(
        <div>
            <table>
              {/* <thead>
                <tr>
                  <th>نام اتاق</th>
                  <th></th>
                  <th>تعداد تخت</th>
                  <th>تعداد حمام</th>
                  <th>wifi</th>
                  <th>قیمت هر شب</th>
                  <th>عکس</th>
                  <th>امکانات</th>
                  <th>توضیحات</th>
                </tr>
              </thead> */}
              <tbody>

                       {rooms.map((room)=>
<>

                      <tr key={rooms.id}>
                        <td>
                          {room.title}
                         
                        </td>
                        <td>ظرفیت:{room.capacity}</td>
                        <td>{room.bed}</td>
                        <td>{room.bath}</td>
                        <td>{room.wifi}</td>
                        <td>{room.price}</td>
                        <td>{room.img}</td>

                        <td><button onClick={()=>setSelectedRoom(room)}>ویرایش</button></td>
                        <td><button onClick={()=>deleteRoom(room.id)}>حذف</button></td>
                        </tr>
                        <tr>

                          <td colSpan={3}>{room.facilities}</td>
                          <td colSpan={4}>{room.info}</td>
                        </tr>
                        </>
                       )
                      }
    
              </tbody>
            </table>
            <div>
              <button disabled={rooms.length < 1} onClick={()=>setPage((prev)=>prev + 1)}>بعدی</button>
              <button  disabled={page <= 1} onClick={()=>setPage((prev)=>prev - 1)}>قبلی</button>
            </div>
        </div>
      )



      
      // <div>
      //   {
      //     rooms.map((room)=>{
            
      //     })

         

         
      //   }
      // </div>
      :null}

    </div>
  )
}

export default ShowAllRooms
