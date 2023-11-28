import React, { useState } from "react";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { returnUsersEmails } from "../../store/users/usersActions";

interface IModalProps {
  setModal: (value: boolean) => void;
}

const ChatMembersModal = ({
  setModal,
  members,
}: {
  setModal: any;
  members: any;
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [emails, setEmails] = useState<string[]>([]);

  const fetchEmails = async () => {
    const emailPromises = members.map((member: number) =>
      dispatch(returnUsersEmails({ id: member }))
    );

    const emailResults = await Promise.all(emailPromises);
    const emailAddresses = emailResults.map((result: any) => result.payload);
    setEmails(emailAddresses);
  };

  fetchEmails();

  return (
    <div className="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full text-black z-[1000] bg-black/30">
      <div
        className="m-auto bg-white p-16 rounded-lg flex flex-col text-center items-center gap-5 w-[30rem]"
        style={{ position: "relative" }}
      >
        <button
          style={{
            position: "absolute",
            right: "15px",
            top: "10px",
          }}
          onClick={() => {
            setModal(false);
          }}
        >
          X
        </button>
        <h1 className="font-bold text-2xl">Chat Members</h1>
        <div>
          {emails.map((email: string, index: number) => (
            <p key={index} className="text-black">
              {email}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMembersModal;
