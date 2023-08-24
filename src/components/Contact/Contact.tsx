import { Container } from "./styles";
import { Form } from "../Form/Form";
import Button from "../Button";

export function Contact() {
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
        <Button iconType="Mail" variant="secondary">
          {/* <img src={emailIcon} alt="Email" /> */}
          {/* <Icon type={IconType.MAIL} /> */}
          <a href="mailto:skhandilshad1998@gmail.com" />
        </Button>

        <Button iconType="Phone" variant="secondary">
          {/* <img src={phoneIcon} alt="Email" /> */}
          {/* <Icon type={IconType.PHONE} /> */}
          <a href="tel:+923109374288" />
        </Button>
      </div>
      <Form></Form>
    </Container>
  );
}
