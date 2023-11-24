import React, { useState } from "react";
import ChangePassModal from "./ChangePassModal";

const OneProfile = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      OneProfile
      <a
        onClick={() => setModal(true)}
        className="text-blue-400 underline cursor-pointer"
      >
        Change password
      </a>
      {modal && <ChangePassModal setModal={setModal} />}
    </div>
  );
};

export default OneProfile;
