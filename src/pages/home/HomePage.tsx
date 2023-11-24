import React from "react";
import style from "./homePage.module.css";
import arrow from "../../assets/arrow.png";
import Rectangle from "../../assets/Rectangle 3.png";
import Vector from "../../assets/Vector 2.svg";
import nasa from "../../assets/nasa.png";
import makers from "../../assets/makers.png";
import post from "../../assets/post-icon.png";
import help from "../../assets/icons-help.png";
import forum from "../../assets/icons_forum.png";
import personal_area from "../../assets/icons_personal_area.png";
import training from "../../assets/icons_training_program.png";
import polygon from "../../assets/Polygon 1.png";
import girl from "../../assets/icon_girl.png";
import boy from "../../assets/icon-boy.png";
import comtexno from "../../assets/comtexno.png";
import kgyst from "../../assets/kgustahaha.png";
import fissman from "../../assets/fissman.png";

const HomePage = () => {
  return (
    <div className={style.home_page}>
      <div className={style.home_page_first_block}>
        <div className="mt-28">
          <img src={Rectangle} alt="rectangle" />
        </div>
        <div>
          <img className="mt-28 ml-64" src={Vector} alt="vector" />
          <h1 className={style.company_home_page}>
            Redu<span className="decoration-violet-900">X</span> job
          </h1>
          <p className={style.company_home_page_p}>Find a job with us!</p>
          <img className={style.company_home_arrow} src={arrow} alt="arrow" />
        </div>
        {/* <div className="bg-black ml-24 w-1/3 h-3/4 mt-20 rounded-3xl">
          <video src=""></video>
        </div> */}
        <div className="video-container" id="Home">
          <video id="video-nav"></video>
        </div>
      </div>

      <div className="text-xl mt-20 flex items-center justify-center">
        <p className="">
          Companies with which we <br /> started cooperation
        </p>
        <img className="w-20 ml-36" src={nasa} alt="nasa" />
        <img className="w-44 h-14 ml-10" src={makers} alt="makers" />
        <img className="w-12 ml-10" src={comtexno} alt="nasa" />
        <img className="w-20 ml-10" src={kgyst} alt="nasa" />
        <img className="w-22 h-14 ml-10" src={fissman} alt="nasa" />
      </div>

      <div className="mt-24">
        <div className="flex flex-col items-center">
          <h3 className="text-7xl mb-6">What do we have on our website?</h3>
          <p className="text-xl">
            The site is aimed at optimal and quick search for vacancies and
            potential employees. You can <br /> do different posts, such as
            assembling a team, freelancing orders and searching for workers.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="mt-24">
            <div className={style.home_about_desc}>
              <div>
                <img className="w-28" src={post} alt="post" />
              </div>
              <div>
                <p className="ml-2">Posts</p>
                <p className={style.home_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat aliquid cum reiciendis illum veniam eveniet ducimus a
                  dolores tenetur deleniti quibusdam alias, dicta odio enim
                  veritatis dolore deserunt nemo. In!
                </p>
              </div>
            </div>
            <div className={style.home_about_desc}>
              <div>
                <img className="w-28" src={help} alt="help" />
              </div>
              <div>
                <p className="ml-2">Help with errors</p>
                <p className={style.home_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum recusandae totam nulla distinctio. Aperiam distinctio
                  delectus libero veniam, quod possimus cupiditate, nisi
                  voluptas iste, inventore eligendi placeat veritatis laboriosam
                  repellendus.
                </p>
              </div>
            </div>
            <div className={style.home_about_desc}>
              <div>
                <img className="w-28" src={forum} alt="forum" />
              </div>
              <div>
                <p className="ml-4">Forum</p>
                <p className={style.home_text}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam delectus, iusto illum iure amet minus. Dolorum
                  recusandae optio impedit. Nostrum voluptas, ex saepe beatae
                  possimus velit a quidem molestiae sit.
                </p>
              </div>
            </div>
            <div className={style.home_about_desc}>
              <div>
                <img className="w-28" src={personal_area} alt="personal_area" />
              </div>
              <div>
                <p className="ml-2">Personal Area</p>
                <p className={style.home_text}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
                  reprehenderit molestiae consequatur a modi minus tempora
                  soluta placeat laborum debitis, molestias voluptatibus odit.
                  Ducimus necessitatibus dolorum sunt mollitia perferendis
                  culpa.
                </p>
              </div>
            </div>
            <div className={style.home_about_desc}>
              <div>
                <img className="w-28" src={training} alt="training" />
              </div>
              <div>
                <p className="ml-2">Training program</p>
                <p className={style.home_text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                  minima expedita veniam incidunt veritatis? Sed nostrum
                  temporibus aperiam ducimus, iste consectetur, quo non omnis
                  neque nulla vitae, vero quod repellat.
                </p>
              </div>
            </div>
          </div>
          <div className={style.home_about}>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className={style.home_second_block}>
        <div className="ml-14 ">
          <h3 className="text-7xl">Important information!</h3>
          <img src={polygon} alt="" />
          <h5 className={style.home_second_block_text_h5}>Summary</h5>
          <p className={style.home_second_block_text}>
            A resume plays a crucial role in the job search process, providing a
            potential employer with a concise overview of a candidate's skills,
            experience, and qualifications. It serves as the first impression
            that can determine successful career advancement. A carefully
            crafted resume highlights the candidate's strengths, capturing the
            employer's attention and opening doors to new professional
            opportunities. Our website offers the opportunity to create a resume
            or upload your own as a file!
          </p>
        </div>
        <div className="flex ml-10 items-end justify-center text-zinc-900">
          <div className="w-64 h-96 bg-slate-100 mr-10 rounded-3xl mb-6 p-4">
            <div className="flex">
              <div>
                <img className="h-16" src={girl} alt="girl" />
              </div>
              <div className="ml-4 mt-2">
                <p>Name: Anna</p>
                <p>Age: 20 yers</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                <span className="text-violet-950 text-base">profesion:</span>{" "}
                <br />
                i’m middle Front-end developer! <br />
                <span className="text-violet-950 text-base">
                  Professional profile:
                </span>
                <br />I strive to create efficient and intuitive web
                applications using advanced front-end technologies. I have
                experience in developing user interfaces, optimizing performance
                and adapting designs for various devices. <br />
                <span className="text-violet-950 text-base">
                  Programming languages:
                </span>{" "}
                <br />
                JavaScript, HTML, CSS
              </p>
            </div>
          </div>
          <div className="w-64 h-96 bg-slate-100 rounded-3xl p-4 mb-6">
            <div className="flex">
              <div>
                <img className="h-16" src={boy} alt="girl" />
              </div>
              <div className="ml-4 mt-2">
                <p>name: Aman</p>
                <p>Age: 20 yers</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                <span className="text-violet-950 text-base">profesion:</span>{" "}
                <br />
                i’m middle Full Stack developer! <br />
                <span className="text-violet-950 text-base">
                  Professional profile:
                </span>
                <br />I am a Full Stack developer with experience in creating
                effective web applications, capable of working with both
                front-end and back-end. I have experience in developing scalable
                and innovative projects.. <br />
                <span className="text-violet-950 text-base">
                  Programming languages:
                </span>
                <br />
                JavaScript, Python, PHP,React, Laravel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
