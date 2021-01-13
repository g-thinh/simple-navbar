import styled from "styled-components";
import Card from "../components/Card";

const About = () => {
  return (
    <>
      <Title>About Page</Title>
      <Card>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          auctor ligula nulla, vitae fermentum libero aliquet id. Integer nec
          feugiat tortor, in molestie arcu. Vestibulum vel lectus non erat
          lobortis porta laoreet sit amet mi. Sed lacus est, aliquam at enim
          vel, feugiat accumsan eros. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Maecenas venenatis nibh
          sed lobortis sodales. Ut lacinia nisi quis libero pulvinar, ac finibus
          ante sagittis.
        </p>
        <br></br>
        <p>
          Aenean varius lorem eget faucibus vestibulum. Aenean leo dolor, tempus
          ut lorem a, laoreet tempus quam. Proin libero risus, dignissim quis
          congue sit amet, vehicula sed magna. Pellentesque pellentesque leo
          nunc, quis auctor leo semper et. Donec leo justo, sollicitudin a
          vulputate pulvinar, vehicula id libero. Maecenas nec tincidunt quam.
          Vestibulum ac sollicitudin sapien. Fusce vitae nibh dui. Sed non
          lectus sed risus pretium tempor id a neque. Ut luctus semper velit a
          feugiat. Integer fringilla ac dui at porttitor. Morbi non vulputate
          libero. Nullam gravida, sapien non ultricies scelerisque, lorem nibh
          ornare justo, vel pellentesque ligula nisl ut felis. Donec non gravida
          urna. Vestibulum ullamcorper aliquet ipsum, eu commodo eros tempor et.
        </p>
      </Card>
    </>
  );
};

const Title = styled.h1`
  margin: 1rem 3rem;
  font-size: 2rem;
`;

export default About;
