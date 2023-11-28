import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { createResume } from "../../store/profiles/profilesActions";

const CreateResume = () => {
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [resumeObj, setResumeObj] = useState<any>(null);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setResumeObj({
        user: {
          first_name: "",
          last_name: "",
          email: currentUser?.email,
        },
        birth: "",
        appliedVac: 5,
        specialization: "",
        sex: "",
        city: "",
        phone: "",
        citizenship: "",
        skills: "",
        cover: "",
        education: "",
        profile: currentUser?.id,
      });
    }
  }, [currentUser]);

  return (
    <div className="bg-gray-500 p-3 w-1/2 flex flex-col gap-y-2">
      <h1 className="text-white">Create Resume</h1>
      <input
        placeholder="first name"
        type="text"
        onChange={(e) =>
          setResumeObj({
            ...resumeObj,
            user: {
              ...resumeObj.user,
              first_name: e.target.value,
            },
          })
        }
      />
      <input
        placeholder="last name"
        type="text"
        onChange={(e) =>
          setResumeObj({
            ...resumeObj,
            user: {
              ...resumeObj.user,
              last_name: e.target.value,
            },
          })
        }
      />
      <input
        type="date"
        onChange={(e) => setResumeObj({ ...resumeObj, birth: e.target.value })}
      />
      <select
        name="specialization"
        id=""
        onChange={(e) =>
          setResumeObj({ ...resumeObj, specialization: e.target.value })
        }
      >
        <option hidden>specialization</option>
        <option value="Front-end разработка">Front-end</option>
        <option value="Back-end разработка">Back-end</option>
        <option value="Мобильная разработка">Mobile</option>
        <option value="Data science">Data science</option>
        <option value="UX/UI дизайн">UX/UI</option>
      </select>
      <select
        name="sex"
        id=""
        onChange={(e) => setResumeObj({ ...resumeObj, sex: e.target.value })}
      >
        <option hidden>sex</option>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
      <input
        type="text"
        placeholder="city_of_residence"
        onChange={(e) => setResumeObj({ ...resumeObj, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="citizenship"
        onChange={(e) =>
          setResumeObj({ ...resumeObj, citizenship: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="phone number"
        onChange={(e) => setResumeObj({ ...resumeObj, phone: e.target.value })}
      />
      <input
        type="text"
        placeholder="skills"
        onChange={(e) => setResumeObj({ ...resumeObj, skills: e.target.value })}
      />
      <textarea
        name=""
        id=""
        placeholder="cover letter"
        cols={30}
        rows={10}
        onChange={(e) => setResumeObj({ ...resumeObj, cover: e.target.value })}
      ></textarea>
      <select
        name=""
        id=""
        onChange={(e) =>
          setResumeObj({ ...resumeObj, education: e.target.value })
        }
      >
        <option hidden>education</option>
        <option value="Среднее">Среднее</option>
        <option value="Среднее специальное">Среднее специальное</option>
        <option value="Неоконченное высшее">Неоконченное высшее</option>
        <option value="Бакалавр">Бакалавр</option>
        <option value="Магистр">Магистр</option>
        <option value="Кандидат наук">Кандидат наук</option>
        <option value="Высшее">Высшее</option>
        <option value="Доктор наук">Доктор наук</option>
      </select>
      <button onClick={() => dispatch(createResume({ resumeObj }))}>
        Create resume
      </button>
    </div>
  );
};

export default CreateResume;
