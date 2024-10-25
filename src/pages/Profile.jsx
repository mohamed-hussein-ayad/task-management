import { useSelector } from "react-redux";
import profilePicture from "../assets/image/profile-picture.jpeg";

const Profile = () => {
  const { email, name } = useSelector((state) => state.userSlice);
  const userSlice = useSelector((state) => state);
  console.log(userSlice);
  return (
    <div className="">
      <h2 className="text-3xl font-bold mx-4 my-2">User Profile</h2>
      <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img src={profilePicture} alt="profile-picture" />
        </div>
        <div className="p-6 text-center">
          <h5 className="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Name: {name}
          </h5>
          <h5 className="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Email: {email}
          </h5>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2">
          <a
            href="#facebook"
            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="#twitter"
            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="#instagram"
            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
