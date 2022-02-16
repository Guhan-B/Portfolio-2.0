import React from "react";
import EmailJS from "@emailjs/browser";

import styles from "./styles.module.css";

import Arrow from "../../assets/Arrow.svg";
import Success from "../../assets/Check.svg";
import Error from "../../assets/Error.svg";

const ContactSection = () => {
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState({
    Name: false,
    Email: false,
    Subject: false,
    Message: false,
  });
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertDetails, setAlertDetails] = React.useState({});

  const validateEmail = (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value);

  const sendMail = () => {
    EmailJS.init("user_bEu9GQ8ZuTI9BYeqcWjZf");
    const templateParams = {
      from_email: email,
      to_email: "bkguhan2001@gmail.com",
      from_name: name,
      subject: subject,
      message: message,
    };
    EmailJS.send("service_gt9wr2k", "template_pybbibp", templateParams)
      .then((res) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setShowAlert(true);
        setAlertDetails({
          message: "Message sent successfully",
          icon: Success,
          type: "success",
        });
        setTimeout(() => setShowAlert(false), 6000);
      })
      .catch((err) => {
        setShowAlert(true);
        setAlertDetails({
          message: "Unable to send message",
          icon: Error,
          type: "error",
        });
        setTimeout(() => setShowAlert(false), 6000);
      });
  };

  const submit = (e) => {
    e.preventDefault();

    let isError = false;
    const errorCopy = {
      Name: false,
      Email: false,
      Subject: false,
      Message: false,
    };

    if (name === "") {
      errorCopy.Name = true;
      isError = true;
    }

    if (email === "" || !validateEmail(email)) {
      errorCopy.Email = true;
      isError = true;
    }

    if (subject === "") {
      errorCopy.Subject = true;
      isError = true;
    }

    if (message === "") {
      errorCopy.Message = true;
      isError = true;
    }

    setError(errorCopy);

    if (isError) {
      setShowAlert(true);
      setAlertDetails({
        message: "One or more values is incorrect",
        icon: Error,
        type: "error",
      });
      setTimeout(() => setShowAlert(false), 6000);
    } else {
      sendMail();
    }
  };

  return (
    <div className={styles.wrapper} id="contact">
      {showAlert && <Alert alert={alertDetails} />}
      <div className={styles.left}>
        <div>
          <h1>Let's</h1>
          <h1>Talk.</h1>
        </div>
      </div>
      <div className={styles.right}>
        <h2>Contact Me</h2>
        <p>
          I'm intreseted to hear any suggestion or ideas related to project,
          also if you have any questions or other requests feel free to use the
          form
        </p>
        <form onSubmit={submit}>
          <div className={styles.col_2}>
            <Input
              type="text"
              label="Name"
              value={name}
              onChange={(value) => setName(value)}
              isError={error.Name}
            />
            <Input
              type="text"
              label="Email"
              value={email}
              onChange={(value) => setEmail(value)}
              isError={error.Email}
            />
          </div>
          <Input
            type="text"
            label="Subject"
            value={subject}
            onChange={(value) => setSubject(value)}
            isError={error.Subject}
          />
          <Input
            type="textarea"
            label="Message"
            value={message}
            onChange={(value) => setMessage(value)}
            isError={error.Message}
          />
          <button className={styles.submit_button}>
            <span>Send Message</span>
            <img src={Arrow} alt="arrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = (props) => {
  const classList = [styles.input_group];

  if (props.isError === true) classList.push(styles.error);

  if (props.type === "textarea")
    return (
      <div className={classList.join(" ")}>
        <textarea
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.label}
          value={props.value}
        />
        <span />
      </div>
    );
  else
    return (
      <div className={classList.join(" ")}>
        <input
          value={props.value}
          type={props.type}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.label}
        />
        <span />
      </div>
    );
};

const Alert = (props) => {
  return (
    <div className={styles.alert + " " + styles[props.alert.type]}>
      <span>{props.alert.message}</span>
      <img src={props.alert.icon} alt="error icon" />
    </div>
  );
};

export default ContactSection;
