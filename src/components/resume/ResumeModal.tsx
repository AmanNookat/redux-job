import React, { useState } from "react";

const ResumeModal = ({
  resume,
  setResumeModal,
}: {
  resume: any;
  setResumeModal: any;
}) => {
  const [editedResume, setEditedResume] = useState<any>(null);

  console.log(resume);

  return (
    <div className="flex fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-black/30">
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
            setResumeModal(false);
          }}
        >
          X
        </button>
        {editedResume ? (
          <>
            <div className="flex">
              <input
                placeholder="first name"
                type="text"
                value={editedResume.first_name}
                onChange={(e) =>
                  setEditedResume({
                    ...editedResume,
                    first_name: e.target.value,
                  })
                }
              />
              <input
                placeholder="last name"
                type="text"
                value={editedResume.last_name}
                onChange={(e) =>
                  setEditedResume({
                    ...editedResume,
                    last_name: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="date"
              onChange={(e) =>
                setResumeModal({
                  ...editedResume,
                  date_of_birth: e.target.value,
                })
              }
            />
            <select
              name="specialization"
              id=""
              value={editedResume.specialization}
              onChange={(e) =>
                setEditedResume({
                  ...editedResume,
                  specialization: e.target.value,
                })
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
              value={editedResume.sex}
              onChange={(e) =>
                setEditedResume({ ...editedResume, sex: e.target.value })
              }
            >
              <option hidden>sex</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
            <div className="flex">
              <input
                type="text"
                placeholder="city_of_residence"
                value={editedResume.city_of_residence}
                onChange={(e) =>
                  setEditedResume({ ...editedResume, city: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="citizenship"
                value={editedResume.citizenship}
                onChange={(e) =>
                  setEditedResume({
                    ...editedResume,
                    citizenship: e.target.value,
                  })
                }
              />
            </div>
            <input
              type="text"
              placeholder="phone number"
              value={editedResume.phone_number}
              onChange={(e) =>
                setEditedResume({ ...editedResume, phone: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="skills"
              value={editedResume.skills}
              onChange={(e) =>
                setEditedResume({ ...editedResume, skills: e.target.value })
              }
            />
            <textarea
              name=""
              id=""
              placeholder="cover letter"
              cols={30}
              rows={3}
              value={editedResume.cover_letter}
              onChange={(e) =>
                setEditedResume({ ...editedResume, cover: e.target.value })
              }
            ></textarea>
            <select
              name=""
              id=""
              value={editedResume.education}
              onChange={(e) =>
                setEditedResume({ ...editedResume, education: e.target.value })
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
            <button>Save</button>
          </>
        ) : (
          <>
            <p>First name: {resume.first_name}</p>
            <p>Last name: {resume.last_name}</p>
            <p>Date of birth: {resume.date_of_birth}</p>
            <p>Email: {resume.email}</p>
            <p>City: {resume.city_of_residence}</p>
            <p>Cover letter: {resume.cover_letter}</p>
            <p>Education: {resume.education}</p>
            <p>Sex: {resume.sex}</p>
            <p>Skills: {resume.skills}</p>
            <p>Specialization: {resume.specialization}</p>
            <button
              className="bg-green-400"
              onClick={() => setEditedResume(resume)}
            >
              edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeModal;
