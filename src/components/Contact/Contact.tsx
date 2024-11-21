import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";

import { Container } from "./styles";

const Contact = () => {
  const [phoneOption, setPhoneOption] = useState(false);
  const contactNumber = '+92 310 9374288';

  const handleClick = (option?: string) => {
    switch (option) {
      case 'mail':
        setPhoneOption(false)
        break;
      case 'phone':
        setPhoneOption(true)
        break;
      default:
        return;
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contactNumber)
      .then(() => {
        toast.success("Contact Copied Successfully!", {
          position: toast.POSITION.TOP_CENTER,
          pauseOnFocusLoss: false,
          closeOnClick: true,
          hideProgressBar: false,
          toastId: "success",
          autoClose: 1300
        });
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  }
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>
          If you've seen my potential or want to talk to me, don't hesitate to
          send me a message.
        </p>
      </header>
      <div className="contacts">
        <a href="https://mail.google.com/mail/u/0/?view=cm&to=skhandilshad1998@gmail.com" target="_blank" title="Click To Send Email" rel="noreferrer">
          <Button iconType="Mail" variant="secondary" onClick={() => { handleClick('mail') }} />
        </a>
        <Button iconType="Phone" variant="secondary" onClick={() => { handleClick('phone') }} />
      </div>
      <div>
        {/* <Form /> */}
        {phoneOption &&
          <div
            title="Copy to clipboard"
            className="phone-wrapper"
            onClick={copyToClipboard}
          >
            <p className="phone">{contactNumber}</p>
            <div className="copy-icon" >
              📋
            </div>
          </div>}
      </div>
    </Container>
  );
}

export default Contact;