import React, { useState } from "react";
import boy from "../../assets/icon-boy.png"

const Education = () => {
  const [showVacanciesTooltip, setShowVacanciesTooltip] = useState(false);
  const [showTitleTooltip, setShowTitleTooltip] = useState(false);
  const [showTextTooltip, setShowTextTooltip] = useState(false);
  const [showPriceTooltip, setShowPriceTooltip] = useState(false);
  const [showUserTooltip, setShowUserTooltip] = useState(false);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen bg-fixed"
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-vector/dark-blue-background-with-line-elements_181182-595.jpg)`,
      }}
    >
      <div>
        <div className="py-56 ml-16">
          <div className="w-4/12 ml-4 bg-[#111827] h-[500px] rounded-3xl border">
            <div className="text-white mt-5 ml-7 font-bold">
              <p
                className="text-right mr-5 cursor-pointer"
                onMouseEnter={() => setShowVacanciesTooltip(true)}
                onMouseLeave={() => setShowVacanciesTooltip(false)}
              >
                Vacancies
              </p>
              {showVacanciesTooltip && (
                <div>
                  <div className="tooltip animated-tooltip ml-auto bg-[#d9d9d9]  text-black rounded-3xl py-9 px-9">
                    <h1 className="text-3xl  ">
                      You need to determine what type of post you are posting
                    </h1>
                    {/* <hr className="text-white  w-96 mb-5"/> */}
                    <p className="text-white mb-5">
                      ______________________________________________________________
                    </p>
                    <h2 className="text-[#0175ac] text-xl">Work</h2>
                    <p className="-mt-6 ml-16">
                      - This is, roughly speaking, freelancing. You need
                    </p>
                    to redo or complete this or that code, but there is no need
                    to hire a person, then this type is for you.
                    <p className="text-white mb-5">
                      ______________________________________________________________
                    </p>
                    <h2 className="text-[#5b499c] text-xl">Vacancies</h2>
                    <p className="-mt-6 ml-32">
                      - You can post this post only if you are a
                    </p>
                    company. This is hiring employees.
                    <p className="text-white mb-5">
                      ______________________________________________________________
                    </p>
                    <h2 className="text-[#686868] text-xl">Teams</h2>
                    <p className="-mt-6 ml-20">
                      - If you are missing a team or you are missing a
                    </p>
                    person, this post is for you. Find people with the right
                    skills and find a friend
                  </div>
                </div>
              )}
              {showTitleTooltip && (
                <div className="-mt-24 animated-tooltip ml-auto bg-[#d9d9d9]  text-black rounded-3xl py-9 px-9 ">
                  <p>a card concept of a task that needs to be done</p>
                </div>
              )}
              <h1
                className="text-4xl font-extrabold mt-3 cursor-pointer"
                onMouseEnter={() => setShowTitleTooltip(true)}
                onMouseLeave={() => setShowTitleTooltip(false)}
              >
                Title lorem tybhks nnjfy !
              </h1>

              <div className="flex ml-24 mt-5">
                <img
                  src={boy}
                  className="w-12 h-12 rounded-full"
                />
                <p
                  onMouseEnter={() => setShowUserTooltip(true)}
                  onMouseLeave={() => setShowUserTooltip(false)}
                  className="font-extrabold text-xl ml-7 py-3 cursor-pointer"
                >
                  User
                </p>
                {showUserTooltip && (
                  <div className="-mt-24">
                    <div className=" animated-tooltip ml-auto  bg-[#d9d9d9]  text-black rounded-3xl py-9 px-9 ">
                      <p>the one who published the task</p>
                    </div>
                  </div>
                )}
              </div>
              {showTextTooltip && (
                <div className="-mt-24">
                  <div className=" animated-tooltip ml-auto  bg-[#d9d9d9]  text-black rounded-3xl py-9 px-9 ">
                    <p>a detailed description of a particular task</p>
                  </div>
                </div>
              )}
              <div className="bg-[#d9d9d9] m-9 w-auto h-56 py-9 text-xl text-black   ">
                <p
                  className="mr-5 ml-5 cursor-pointer"
                  onMouseEnter={() => setShowTextTooltip(true)}
                  onMouseLeave={() => setShowTextTooltip(false)}
                >
                  Front middle programmer needed. Which knows libraries such as:
                  React, JQuery. jQuery. With 2 years of work experience. The
                  internship is a month, we don’t pay for it, but we indicated
                  the salary at the bottom
                </p>
              </div>

              <p
                className="ml-96 text-lg cursor-pointer"
                onMouseEnter={() => setShowPriceTooltip(true)}
                onMouseLeave={() => setShowPriceTooltip(false)}
              >
                Salary: 1200$
              </p>
              {showPriceTooltip && (
                <div className="tooltip-container   ml-auto relative">
                  <div className="animated-tooltip bg-[#d9d9d9] text-black rounded-3xl py-9 px-9 absolute top-0">
                    <p>
                      the price they are willing to pay if it is successfully
                      completed
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
