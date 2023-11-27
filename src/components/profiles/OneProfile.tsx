import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProfile,
  getOneProfile,
} from "../../store/profiles/profilesActions";
import "./OneProfile.css";

const OneProfile = () => {
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
    <div>
      {edit ? (
        <div>
          <div>
            <p>Языки:</p>
            <input
              type="text"
              value={edit?.languages}
              onChange={(e) => setEdit({ ...edit, languages: e.target.value })}
            />
          </div>
          <div>
            <p>Языки программирования:</p>
            <input
              type="text"
              value={edit?.programming_languages}
              onChange={(e) =>
                setEdit({ ...edit, programming_languages: e.target.value })
              }
            />
          </div>
          <div>
            <p>Образование:</p>
            <input
              value={edit?.education}
              onChange={(e) => setEdit({ ...edit, education: e.target.value })}
              type="text"
            />
          </div>
          <div>
            <p>Стэк:</p>
            <input
              type="text"
              value={edit?.stack}
              onChange={(e) => setEdit({ ...edit, stack: e.target.value })}
            />
          </div>
          <div>
            <p>О себе:</p>
            <input
              type="text"
              value={edit?.about}
              onChange={(e) => setEdit({ ...edit, about: e.target.value })}
            />
          </div>
          <div>
            <p>Возраст:</p>
            <input
              type="text"
              value={edit?.age}
              onChange={(e) => setEdit({ ...edit, age: e.target.value })}
            />
          </div>
          <div>
            <p>Опыт работы:</p>
            <input
              type="text"
              value={edit?.work_experience}
              onChange={(e) =>
                setEdit({ ...edit, work_experience: e.target.value })
              }
            />
          </div>
          <div>
            <p>Достижения:</p>
            <input
              type="text"
              value={edit?.achievements}
              onChange={(e) =>
                setEdit({ ...edit, achievements: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="file"
              onChange={(e: any) => {
                const selectedFile = e.target.files[0];
                setEdit({ ...edit!, profile_image: selectedFile });
              }}
            />
          </div>

          <div>
            <button
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
      ) : (
        <div>
          <div className="profile">
            <div className="profile--image">
              <img src={oneProfile?.profile_image} alt="lalala" />
            </div>
            <div className="profile--content">
              <p>Языки: {oneProfile?.languages} </p>
              <p>Языки программирования: {oneProfile?.programming_languages}</p>
              <p>Образование:{oneProfile?.education}</p>
              <p>Стэк:{oneProfile?.stack} </p>
              <p>О себе:{oneProfile?.about}</p>
              <p>Возраст: {oneProfile?.age}</p>
              <p>Опыт работы:{oneProfile?.work_experience}</p>
              <p>Достижения:{oneProfile?.achievements}</p>
              <button
                onClick={() => setEdit(oneProfile)}
                style={{ color: "red" }}
              >
                Редактировать:
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneProfile;
