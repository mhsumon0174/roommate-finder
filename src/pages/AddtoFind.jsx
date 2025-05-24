import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const AddtoFind = () => {
  const {user}=use(AuthContext)
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    console.log(newUser);
    
    fetch("https://assignment-10-server-theta-three.vercel.app/roommates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Data Added Successfully!",
            icon: "success",
            draggable: true,
            timer:1400
          });
navigate('/browselisting');
        }
        
      });
  };
  return (
    <div className="my-20 p-10 rounded-lg text-blue-900 bg-blue-50">
      <div>
        <h1 className="text-3xl font-bold text-center">
          Add Information To Find An Appropriate Roommate
        </h1>
        <p className="mt-4 w-4/5 md:text-center text-justify mx-auto  opacity-65">
          To connect with the right roommate, please fill in all the details
          carefully. Include your Title, Location, Rent Amount, Room Type, and
          your Lifestyle Preferences to help others understand your living
          style. Write a short Description about the space or what you're
          looking for. Don’t forget to add your Contact Info, Availability, User
          Email, and User Name so interested users can reach out easily. The
          more complete your info, the better your chances of finding a
          compatible roommate
        </p>
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
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              placeholder="Location"
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Rent Amount</label>
            <input
              type="number"
              className="input w-full"
              name="amount"
              placeholder="Rent Amount"
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Room Type</label>
            <input
              type="text"
              className="input w-full"
              name="roomType"
              placeholder="Room Type (Single, Shared, etc.)
"
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">LifeStyle</label>
            <input
              type="text"
              className="input w-full"
              name="lifeStyle_Preferences"
              placeholder="Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)
"
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Contact Info</label>
            <input
              type="text"
              className="input w-full"
              name="contact"
              placeholder="Contact Info"
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Availability</label>
            <input
              type="text"
              className="input w-full"
              name="availability"
              placeholder="Availability"
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">PhotoURL</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo URL"
              readOnly
              value={user?.photoURL|| ''}
            />
          </fieldset>
          <fieldset className="  border-base-300 rounded-box  border p-4">
            <label className="label">Contact Number</label>
            <input
              type="number"
              className="input w-full"
              name="contactNumber"
              placeholder="Contact Number"
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
              value={user?.email ||''}
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
              value={user?.displayName || ''}
            />
          </fieldset>
        </div>
        <div className="my-10">
          <button onClick={window.scrollTo(0, 0)} className="btn w-full btn-primary text-xl">Add Data</button>
        </div>
      </form>
    </div>
  );
};

export default AddtoFind;
