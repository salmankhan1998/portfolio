import { Container } from "./styles";
import { Form } from "../Form/Form";
import Button from "../Button";
import { useState } from "react";

export function Contact() {
  const [mailOption, setMailOption] = useState(false);
  const [phoneOption, setPhoneOption] = useState(false);

  const handleClick = (option?: string) => {
    switch (option) {
      case 'mail':
        setMailOption(true)
        setPhoneOption(false)
        break;
      case 'phone':
        setPhoneOption(true)
        setMailOption(false)
        break;
      default:
        return;
    }
  }
  return (
    <Container id="contact">
      <header>
        <h2>Contact me</h2>
        <p>
          If you've seen my potential or want to talk to me, don't hesitate to
          send me a message.
        </p>
      </header>
      <div className="contacts">
        <Button iconType="Mail" variant="secondary" onClick={() => { handleClick('mail') }}>
          {/* <img src={emailIcon} alt="Email" /> */}
          {/* <Icon type={IconType.MAIL} /> */}
          <a href="mailto:skhandilshad1998@gmail.com" />
        </Button>

        <Button iconType="Phone" variant="secondary" onClick={() => { handleClick('phone') }}>
          {/* <img src={phoneIcon} alt="Email" /> */}
          {/* <Icon type={IconType.PHONE} /> */}
          <a href="tel:+923109374288" />
        </Button>
      </div>
      <div>
        {mailOption && <Form />}
        {phoneOption &&
          <div className="phoneWrapper">
            <p className="phone">+92 310 9374288</p>
          </div>}
      </div>
    </Container>
  );
}
