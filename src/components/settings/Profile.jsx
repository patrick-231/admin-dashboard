import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import { useState } from "react";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://res.cloudinary.com/dpx184ojl/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727902318/profilPic_tlo2js.jpg"
  );

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
          <p className="text-gray-400">john.doe@admindashboard.com</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center">
        <label
          htmlFor="file-upload"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 cursor-pointer"
        >
          Edit Profile
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
    </SettingSection>
  );
};

export default Profile;
