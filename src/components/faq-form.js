import React from "react";
//import "../style/faq-form.scss";
import styles from "../style/faq-form.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Faq() {
  const [selected, setSelected] = useState(null);
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div>
      <div id={styles["container"]}>
        <div className={styles["forms-container"]}>
          <div className={styles["signin-signup"]}>
            <form className={styles["faq_section"]}>
              <div className={styles["wrapper"]}>
                <h2 className={styles["title"]}>FAQs</h2>
                <div className={styles["accordian"]}>
                  {data.map((item, i) => (
                    <div key={i} className={styles["item"]}>
                      <div
                        className={styles["faq_title"]}
                        onClick={() => toggle(i)}
                      >
                        <h2>{item.question}</h2>
                        <span>{selected === i ? "-" : "+"}</span>
                      </div>

                      <div
                        className={
                          selected === i
                            ? `${styles["content"]} ${styles["show"]}`
                            : styles["content"]
                        }
                      >
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles["panels-container"]}>
          <div className={`${styles["panel"]} ${styles["left-panel"]}`}>
            <div className={styles["content1"]}>
              <h3>Have a new query ?</h3>
              <p>
                Feel free to contact us on our support email : <br />{" "}
                <div className="tw-p-2 tw-max-w-min tw-mx-auto">
                  adhyaaya.ca@gmail.com
                </div>
              </p>
              <a href="mailto:adhyaaya.ca@gmail.com">
                <button
                  className={`${styles["btn"]} tw-hidden ${styles["transparent"]}`}
                  id="sign-up-btn"
                >
                  Ask question
                </button>
              </a>
            </div>
            <img
              src="https://actiserp.com/wp-content/uploads/admin/2019/07/undraw_newsletter_vovu.png"
              className={styles["image"]}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "1. When will my scores get updated?",
    answer: "Your Scores will update within a week after the deadline.",
  },

  {
    question: "2. What are the different categories of tasks?",
    answer:
      "There are two types of tasks: Mandatory task, Bonus task; The mandatory task will help you to get certified and can have other incentives. Bonus tasks will help you to increase your rank.",
  },

  {
    question: "3. What is the criteria for getting the certificate?",
    answer:
      "You have to complete all the mandatory tasks and the bonus tasks helps you to gain a better badge",
  },

  {
    question: "4. What will I gain out of it?",
    answer:
      "You will gain an experience which will help you develop your time management skills, team work, network.",
  },
];
