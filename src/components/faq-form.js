import React from "react";
//import "../style/faq-form.scss";
import styles from "../style/faq-form.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Faq() {
  const [selected, setSelected] = useState(null);
  const onClickButton = (e) => {
    e.preventDefault();
  };
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
      <div id="container">
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
              <h3>Have a new quetion ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className={`${styles["btn"]} ${styles["transparent"]}`}
                id="sign-up-btn"
              >
                Ask question
              </button>
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
    question: "Question1 ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },

  {
    question: "Question2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },

  {
    question: "Question3 ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },

  {
    question: "Question4 ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },
];
