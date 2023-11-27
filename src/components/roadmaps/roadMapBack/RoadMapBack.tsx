import React, { useEffect } from "react";
import "./RoadMapBack.css";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const RoadMapBack = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="roadBack">
      <div className="roadBack--content">
        <h1 data-aos="fade-down" className="roads--h1">
          Backend
        </h1>
        <div className="first--step">
          <div className="first--step--center">
            <h2 data-aos="flip-up" className="roads--h2">
              Learn Lang
            </h2>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="first--step--left">
            <p data-aos="fade-up-right" className="roads--p">
              Java
            </p>
            <p data-aos="fade-up-right" className="roads--p">
              Python
            </p>
            <p data-aos="fade-up-right" className="roads--p">
              JavaScript
            </p>
          </div>
        </div>
        <div className="second--step">
          <h2 data-aos="fade-down" className="roads--h2">
            Git & GitHub
          </h2>
        </div>
        <div className="third--step">
          <div>
            <h2 data-aos="fade-up" className="roads--h2">
              Relational Databases
            </h2>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="third--step--right">
            <p data-aos="fade-down-left" className="roads--p">
              PostgreSQL
            </p>
            <p data-aos="fade-down-left" className="roads--p">
              MySQL
            </p>
            <p data-aos="fade-down-left" className="roads--p">
              Oracle
            </p>
          </div>
        </div>
        <div className="fourth--step">
          <div className="fourth--step--center">
            <h2 data-aos="fade-left" className="roads--h2">
              NoSQL Databases
            </h2>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="fourth--step--left">
            <div className="fourth--step--left--top">
              <div className="fourbox">
                <p data-aos="fade-up-right" className="roads--p">
                  MongoDB
                </p>
                <p data-aos="fade-up-right" className="roads--p">
                  CouchDB
                </p>
                <span data-aos="fade-up-right" className="roads--span">
                  Document DBs
                </span>
              </div>
              <div className="fourbox">
                <p data-aos="fade-up-right" className="roads--p">
                  InfluxDB
                </p>
                <p data-aos="fade-up-right" className="roads--p">
                  Time Scale
                </p>
                <span data-aos="fade-up-right" className="roads--span">
                  Time Series
                </span>
              </div>
            </div>
            <div className="fourth--step--left--bot">
              <div className="fourbox">
                <p data-aos="fade-up-right" className="roads--p">
                  Firebase
                </p>
                <p data-aos="fade-up-right" className="roads--p">
                  RethinkDB
                </p>
                <span className="roads--span">Realtime</span>
              </div>
              <div className="fourbox">
                <p data-aos="fade-up-right" className="roads--p">
                  Cassandra
                </p>
                <p data-aos="fade-up-right" className="roads--p">
                  HBase
                </p>
                <span className="roads--span">Column DBs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="fifth--step">
          <div className="fifth--step--left">
            <div>
              <p data-aos="fade-down-right" className="roads--p">
                Authentification
              </p>
            </div>
            <div className="dots">
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
            </div>
            <div>
              <p data-aos="fade-up-right" className="roads--p">
                OAuth
              </p>
              <p data-aos="fade-up-right" className="roads--p">
                Basic Auth
              </p>
              <p data-aos="fade-up-right" className="roads--p">
                JWT
              </p>
            </div>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="fifth--step--center">
            <h2 data-aos="zoom-in" className="roads--h2">
              Learn about APIs
            </h2>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="fifth--step--right">
            <p data-aos="fade-up-left" className="roads--p">
              REST API
            </p>
            <p data-aos="fade-up-left" className="roads--p">
              JSON
            </p>
            <p data-aos="fade-up-left" className="roads--p">
              Graph QL
            </p>
          </div>
        </div>
        <div className="sixth--step">
          <div className="sixth--step--center">
            <h2 data-aos="fade-right" className="roads--h2">
              Catching
            </h2>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="sixth--step--right">
            <p data-aos="fade-up-left" className="roads--p">
              Client Side
            </p>
            <p data-aos="fade-up-left" className="roads--p">
              Server Side
            </p>
            <p data-aos="fade-up-left" className="roads--p">
              CDN
            </p>
          </div>
        </div>
        <div className="seventh--step">
          <div className="seventh--step--center">
            <h2 data-aos="fade-down-right" className="roads--h2">
              Web Security Knowlage
            </h2>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="seventh--step--left">
            <div className="seventh--left--top">
              <p data-aos="fade-up-left" className="roads--p">
                SHA Family
              </p>
              <p data-aos="fade-up-left" className="roads--p">
                scrypt
              </p>
              <p data-aos="fade-up-left" className="roads--p">
                bcrypt
              </p>
              <p data-aos="fade-up-left" className="roads--p">
                MD 5
              </p>
              <span data-aos="fade-up-left" className="roads--span">
                Hashing Algorithms
              </span>
            </div>
            <div className="seventh--left--bot">
              <p data-aos="fade-up-left" className="roads--p">
                HTTPS
              </p>
              <p data-aos="fade-up-left" className="roads--p">
                CORS
              </p>
              <p data-aos="fade-up-left" className="roads--p">
                CSP
              </p>
              <p data-aos="fade-up-left" className="roads--p">
                SSL/TLS
              </p>
              <span data-aos="fade-up-left" className="roads--span">
                API Security Best Practices
              </span>
            </div>
          </div>
        </div>
        <div className="eighth--step">
          <div className="eighth--step--center">
            <h2 data-aos="fade-up-right" className="roads--h2">
              Testing
            </h2>
          </div>
          <div className="dots">
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div className="eighth--step--right">
            <p data-aos="fade-up-left" className="roads--p">
              Integration Testing
            </p>
            <p data-aos="fade-up-left" className="roads--p">
              Unit Testing
            </p>
            <p data-aos="fade-up-left" className="roads--p">
              Functional Testing
            </p>
          </div>
        </div>
        <div className="ninth--step">
          <h2 data-aos="fade-down" className="roads--h2">
            CI/CD
          </h2>
        </div>
        <div className="tenth--step">
          <h2 data-aos="zoom-in" className="roads--h2">
            WebSockets
          </h2>
        </div>
        <div className="eleventh--step">
          <h2 className="roads--h2">Server Sent Events</h2>
        </div>
      </div>
    </div>
  );
};

export default RoadMapBack;
