import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
import Button from "../Button";

export function Form() {
  const [state, handleSubmit] = useForm("myyozglw");

  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email Successfully sent!", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  });
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thank You for contacting me!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to the top
        </button>
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch via Mail</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {/* <ReCAPTCHA
          sitekey="6LcAu-IdAAAAAJOTI5E_eRltZNQCvukIl2-f1glQ"
          onChange={(e) => {
            setIsHuman(true);
          }}
        ></ReCAPTCHA> */}
        {/* type="submit" */}
        <Button
          title="SEND"
          variant="primary"
          type="submit"
          disabled={state.submitting || !validEmail || !message}
        />
      </form>
    </Container>
  );
}
