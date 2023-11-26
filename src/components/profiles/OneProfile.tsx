import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteResumeFile,
  getOneProfile,
  uploadResumeFile,
} from "../../store/profiles/profilesActions";
import ChangePassModal from "./ChangePassModal";
import ResumeModal from "../resume/ResumeModal";

const OneProfile = () => {
  const [modal, setModal] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);

  const { oneProfile } = useSelector((state: RootState) => state.profiles);

  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile({ user: +id! }));
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <>
      {resumeModal && (
        <ResumeModal
          resume={oneProfile?.resume1[0]}
          setResumeModal={setResumeModal}
        />
      )}
      <div>
        {edit ? (
          <div>
            <div>
              <p>Языки:</p>
              <input type="text" />
            </div>
            <div>
              <p>Языки программирования:</p>
              <input type="text" />
            </div>
            <div>
              <p>Образование:</p>
              <input type="text" />
            </div>
            <div>
              <p>Стэк:</p>
              <input type="text" />
            </div>
            <div>
              <p>О себе:</p>
              <input type="text" />
            </div>
            <div>
              <p>О себе:</p>
              <input type="text" />
            </div>
            <div>
              <p>Возраст:</p>
              <input type="text" />
            </div>
            <div>
              <p>Достижения:</p>
              <input type="text" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>Языки: {oneProfile?.languages} </p>
              <p>Языки программирования: {oneProfile?.programming_languages}</p>
              <p>Образование:{oneProfile?.education}</p>
              <p>Стэк:{oneProfile?.stack} </p>
              <p>О себе:{oneProfile?.about}</p>
              <p>Возраст: {oneProfile?.age}</p>
              <p>Опыт работы:{oneProfile?.work_experience}</p>
              <p>Достижения:{oneProfile?.work_experience}</p>
              <img src={oneProfile?.profile_image} alt="kotak" />
            </div>
            <button style={{ color: "red" }}>Редактировать:</button>
          </div>
        )}
        <a
          onClick={() => setModal(true)}
          className="text-blue-400 underline cursor-pointer"
        >
          Change password
        </a>
        {modal && <ChangePassModal setModal={setModal} />}
        <div>
          {oneProfile?.upload_resume.length ? (
            <>
              <p>resume</p>

              {oneProfile?.upload_resume[0].upload_file.includes(".jpg") ||
              oneProfile?.upload_resume[0].upload_file.includes(".png") ||
              oneProfile?.upload_resume[0].upload_file.includes(".jpeg") ||
              oneProfile?.upload_resume[0].upload_file.includes(".svg") ? (
                <img
                  src={`http://34.136.151.2${oneProfile?.upload_resume[0].upload_file}`}
                  alt="kchau"
                  width="100"
                />
              ) : (
                <button className="bg-gray-500 p-2">
                  <a
                    href={`http://34.136.151.2${oneProfile?.upload_resume[0].upload_file}`}
                    target="_blanck"
                  >
                    Open File
                  </a>
                </button>
              )}
              <button
                onClick={() => {
                  dispatch(
                    deleteResumeFile({
                      resumeId: oneProfile?.upload_resume[0].id,
                      id: +id!,
                    })
                  );
                }}
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <label>Upload resume</label>
              <input
                type="file"
                onChange={(e: any) => {
                  const selectedFile = e.target.files[0];
                  setResumeFile(selectedFile);
                }}
              />
              {resumeFile && (
                <button
                  className="bg-green-500 p-2"
                  onClick={() =>
                    dispatch(uploadResumeFile({ resumeFile, id: +id! }))
                  }
                >
                  Save Resume
                </button>
              )}
            </>
          )}
        </div>
        {oneProfile?.resume1.length ? (
          <button
            onClick={() => setResumeModal(true)}
            className="bg-yellow-500"
          >
            See Resume
          </button>
        ) : (
          <button
            className="bg-blue-400 p-2"
            onClick={() => navigate("/resume")}
          >
            Create Resume
          </button>
        )}
      </div>
    </>
  );
};

export default OneProfile;
