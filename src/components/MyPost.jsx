import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlinePreview } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPost = ({ single,myPost,setMyPost }) => {
 
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-theta-three.vercel.app/roommates/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
              });
              const remainingRoommate=myPost.filter(post=>post._id !==single._id);
              setMyPost(remainingRoommate);
            }
          });
      }
    });
  };

  return (
    <tr className="border  h-25">
      <td className="border">
        <figure>
          {single?.photo ? (
            <img src={single.photo} alt="Album" className="w-[120px] h-[80px] md:w-[150px] md:h-[130px] p-1 mx-auto"  />
          ) : (
            <FaUserLarge className="text-5xl mx-auto" />
          )}
        </figure>
      </td>
      <td className="font-semibold border">{single.userName}</td>
      <td className="font-semibold border">{single.amount}</td>
      <td className="font-semibold border">{single.roomType}</td>
      <td className="flex flex-col gap-2 my-2">
        <Link to={`/roommatedetails/${single._id}`}>
          <button className="btn btn-sm btn-outline btn-info ">
            <FaEye />
          </button>
        </Link>
        <Link to={`/roommateedit/${single._id}`}>
          <button onClick={window.scrollTo(0, 0)} className="btn btn-sm btn-outline btn-info ">
            <FiEdit />
          </button>
        </Link>
        <Link>
          <button onClick={()=>handleDelete(single._id)} className="btn btn-sm btn-outline btn-info ">
            <MdDelete />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyPost;
