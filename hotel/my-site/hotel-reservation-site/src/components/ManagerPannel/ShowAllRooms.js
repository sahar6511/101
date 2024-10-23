import React from 'react';
import { useGetRoomsQuery } from '../redux/services/roomsApi';

const ShowAllRooms = () => {
  const { data: rooms, error, isLoding } = useGetRoomsQuery();
  return (
    <div className='showallromms'>
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ?(
        <div>
            <table>
              <thead>
                <tr>
                  <th>نام اتاق</th>
                  <th>ظرفیت</th>
                  <th>تعداد تخت</th>
                  <th>تعداد حمام</th>
                  <th>wifi</th>
                  <th>قیمت هر شب</th>
                  <th>عکس</th>
                  <th>امکانات</th>
                  <th>توضیحات</th>
                </tr>
              </thead>
              <tbody>

                       {rooms.map((room)=>

                      <tr key={rooms.id}>
                        <td>
                          {rooms.title}
                         
                        </td>
                        <td>{room.capacity}</td>
                        <td>{room.bed}</td>
                        <td>{room.bath}</td>
                        <td>{room.wifi}</td>
                        <td>{room.price}</td>
                        <td>{room.img}</td>
                        <td>{room.facilities}</td>
                        <td>{room.info}</td>
                        </tr>
                     
                       )
                      }
                     
                     

                   
              </tbody>
            </table>
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
