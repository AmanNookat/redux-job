import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { getOneProfile } from "../../store/profiles/profilesActions";

const EditProfile = () => {
  const { oneProfile } = useSelector((state: RootState) => state.profiles);

  const { id } = useParams();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProfile({ user: +id! }));
  }, [dispatch]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <p>Языки: </p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>
        <div>
          <p>Языки программирования: </p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>
        <div>
          <p>Образование:</p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>
        <div>
          <p>Стэк: </p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>
        <div>
          <p>О себе:</p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>
        <div>
          <p>Возраст:</p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>
        <div>
          <p>Опыт работы:</p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>
        <div>
          <p>Достижения:</p>
          <input placeholder="Здесь дожно быть что-то" type="text" />
        </div>

        <div>
          <img src="" alt="" />
        </div>
      </div>
      <button style={{ color: "red" }}>Редактировать:</button>
    </div>
  );
};

export default EditProfile;
