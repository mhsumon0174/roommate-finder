import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { useLoaderData, useNavigate } from "react-router";

const UpdatePost = () => {
  const roommate = useLoaderData();
const navigate=useNavigate()
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedUser = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/roommates/${roommate._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Data Updated Successfully!",
            icon: "success",
            draggable: true,
            timer: 1400,
          });
navigate(`/mylisting/${user?.email}`)
        }
      });
  };
  return (
    <div className="my-20 ">
      <div>
        <h1 className="text-3xl font-bold text-center">Edit Information</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              placeholder="Title (ex- Looking for a roommate in NYC)"
              defaultValue={roommate?.title}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              placeholder="Location"
              defaultValue={roommate?.location}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Rent Amount</label>
            <input
              type="number"
              className="input w-full"
              name="amount"
              placeholder="Rent Amount"
              defaultValue={roommate?.amount}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Room Type</label>
            <input
              type="text"
              className="input w-full"
              name="roomType"
              placeholder="Room Type (Single, Shared, etc.)"
              defaultValue={roommate?.roomType}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">LifeStyle</label>
            <input
              type="text"
              className="input w-full"
              name="lifeStyle_Preferences"
              placeholder="Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)"
              defaultValue={roommate?.lifeStyle_Preferences}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              placeholder="Description"
              defaultValue={roommate?.description}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Contact Info</label>
            <input
              type="text"
              className="input w-full"
              name="contact"
              placeholder="Contact Info"
              defaultValue={roommate?.contact}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Availability</label>
            <input
              type="text"
              className="input w-full"
              name="availability"
              placeholder="Availability"
              defaultValue={roommate?.availability}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">PhotoURL</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo URL"
              defaultValue={roommate?.photoURL}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Contact Number</label>
            <input
              type="number"
              className="input w-full"
              name="contactNumber"
              placeholder="Contact Number"
              defaultValue={roommate?.contactNumber}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              placeholder="Email"
              readOnly
              value={user?.email || ""}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              className="input w-full"
              name="userName"
              placeholder="User Name"
              readOnly
              value={user?.displayName || ""}
            />
          </fieldset>
        </div>
        <div className="my-10">
          <button onClick={()=>{window.scrollTo(0,0)}} className="btn w-full btn-primary text-xl">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
