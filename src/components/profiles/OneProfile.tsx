import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { getOneProfile } from "../../store/profiles/profilesActions";

const OneProfile = () => {
  const { oneProfile } = useSelector((state: RootState) => state.profiles);

  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile({ user: +id! }));
  }, [dispatch]);

  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);

  return (
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
    </div>
  );
};

export default OneProfile;
