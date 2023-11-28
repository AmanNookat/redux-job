import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteResumeFile,
  editProfile,
  getOneProfile,
  uploadResumeFile,
} from "../../store/profiles/profilesActions";
import "./OneProfile.css";

const OneProfile = () => {
  const [modal, setModal] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeModal, setResumeModal] = useState(false);

  const { oneProfile } = useSelector((state: RootState) => state.profiles);

  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile({ user: +id! }));
  }, [dispatch]);

  const navigate = useNavigate();

  const [edit, setEdit] = useState<any>(null);

  console.log(edit);

  return (
    <div className="one--profile">
      <h1 className="one--profile--h1">My Profile</h1>
      {edit ? (
        <div className="profile--edit">
          <div className="profile--edit--row">
            <p>О себе:</p>
            <input
              className="profile--edit--input"
              type="text"
              value={edit?.about}
              onChange={(e) => setEdit({ ...edit, about: e.target.value })}
            />
          </div>
          <div className="profile--edit--row">
            <p>Языки:</p>
            <input
              className="profile--edit--input"
              type="text"
              value={edit?.languages}
              onChange={(e) => setEdit({ ...edit, languages: e.target.value })}
            />
          </div>
          <div className="profile--edit--row">
            <p>Образование:</p>
            <input
              className="profile--edit--input"
              value={edit?.education}
              onChange={(e) => setEdit({ ...edit, education: e.target.value })}
              type="text"
            />
          </div>
          <div className="profile--edit--row">
            <p>Языки программирования:</p>
            <input
              className="profile--edit--input"
              type="text"
              value={edit?.programming_languages}
              onChange={(e) =>
                setEdit({ ...edit, programming_languages: e.target.value })
              }
            />
          </div>
          <div className="profile--edit--row">
            <p>Стэк:</p>
            <input
              className="profile--edit--input"
              type="text"
              value={edit?.stack}
              onChange={(e) => setEdit({ ...edit, stack: e.target.value })}
            />
          </div>
          <div className="profile--edit--row">
            <p>Возраст:</p>
            <input
              className="profile--edit--input"
              type="text"
              value={edit?.age}
              onChange={(e) => setEdit({ ...edit, age: e.target.value })}
            />
          </div>
          <div className="profile--edit--row">
            <p>Опыт работы:</p>
            <input
              className="profile--edit--input"
              type="text"
              value={edit?.work_experience}
              onChange={(e) =>
                setEdit({ ...edit, work_experience: e.target.value })
              }
            />
          </div>
          <div className="profile--edit--row">
            <p>Достижения:</p>
            <input
              className="profile--edit--input"
              type="text"
              value={edit?.achievements}
              onChange={(e) =>
                setEdit({ ...edit, achievements: e.target.value })
              }
            />
          </div>
          <div className="profile--edit--row">
            <p>Выберете фотографию профиля</p>
            <input
              type="file"
              onChange={(e: any) => {
                const selectedFile = e.target.files[0];
                setEdit({ ...edit!, profile_image: selectedFile });
              }}
            />
            <div>
              <button
                className="profile--btn"
                onClick={() => {
                  dispatch(
                    editProfile({
                      profile: edit,
                    })
                  );
                  setEdit(null);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="profile">
            <div className="profile--image">
              <img src={oneProfile?.profile_image} alt="lalala" />
            </div>
            <div className="profile--content">
              <p>О себе: {oneProfile?.about}</p>
              <p>Языки: {oneProfile?.languages} </p>
              <p>Образование: {oneProfile?.education}</p>
              <p>Языки программирования: {oneProfile?.programming_languages}</p>
              <p>Стэк: {oneProfile?.stack} </p>
              <p>Возраст: {oneProfile?.age}</p>
              <p>Опыт работы: {oneProfile?.work_experience}</p>
              <p>Достижения: {oneProfile?.achievements}</p>
              <button
                onClick={() => setEdit(oneProfile)}
                className="profile--btn"
              >
                Edit:
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneProfile;
