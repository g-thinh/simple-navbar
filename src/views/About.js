import styled from "styled-components";
import Card from "../components/Card";

const About = () => {
  return (
    <>
      <Title>About Page</Title>
      <Card>
        <Sub style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Aenean leo dolor
        </Sub>
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
      <Card>
        <Sub>Morbi pellentesque</Sub>
        <p>
          Nunc tincidunt luctus consectetur. Duis sed aliquet leo, volutpat
          consequat mi. Proin sollicitudin tellus orci, vel consectetur neque
          congue ac. Integer pretium egestas eros sit amet pellentesque. Nulla
          facilisi. Pellentesque commodo, ante quis sodales pharetra, ipsum
          felis rhoncus tellus, eget feugiat orci velit vel mauris. Aliquam
          varius ullamcorper est et feugiat. Morbi pellentesque orci mauris, ut
          varius enim mattis id.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1549106765-3d312a9425e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="about-us-pic"
        />
        <p>
          Pellentesque eget augue ut purus dapibus fringilla lacinia non est.
          Etiam sit amet mauris non justo euismod maximus. Duis tristique
          porttitor finibus. Donec id turpis nec elit gravida fringilla. Quisque
          id enim feugiat, tristique erat a, placerat erat. Integer tristique,
          libero vitae dictum fringilla, leo elit malesuada dui, vel bibendum
          nunc lectus id arcu. Etiam et ante metus. Vestibulum nec felis
          tincidunt nibh euismod vestibulum. Maecenas accumsan quam neque. Proin
          ac ornare diam, eget viverra sem.
        </p>
      </Card>
      <Card>
        <Sub>Duis pellentesque hendrerit</Sub>
        <p>
          Sed maximus metus id rutrum aliquam. Donec a enim turpis. Suspendisse
          ac enim nec tellus dignissim vulputate. Etiam diam nunc, hendrerit
          rhoncus eleifend ac, faucibus et risus. Praesent in pharetra diam.
          Quisque molestie gravida quam et commodo. Praesent congue leo ut nibh
          dictum hendrerit.
        </p>
        <br />
        <p>
          Nunc tincidunt luctus consectetur. Duis sed aliquet leo, volutpat
          consequat mi. Proin sollicitudin tellus orci, vel consectetur neque
          congue ac. Integer pretium egestas eros sit amet pellentesque. Nulla
          facilisi. Pellentesque commodo, ante quis sodales pharetra, ipsum
          felis rhoncus tellus, eget feugiat orci velit vel mauris. Aliquam
          varius ullamcorper est et feugiat. Morbi pellentesque orci mauris, ut
          varius enim mattis id.
        </p>
        <br />
        <h4>Vestibulum semper odio vitae</h4>
        <p>
          Pellentesque eget augue ut purus dapibus fringilla lacinia non est.
          Etiam sit amet mauris non justo euismod maximus. Duis tristique
          porttitor finibus. Donec id turpis nec elit gravida fringilla. Quisque
          id enim feugiat, tristique erat a, placerat erat. Integer tristique,
          libero vitae dictum fringilla, leo elit malesuada dui, vel bibendum
          nunc lectus id arcu. Etiam et ante metus. Vestibulum nec felis
          tincidunt nibh euismod vestibulum. Maecenas accumsan quam neque. Proin
          ac ornare diam, eget viverra sem.
        </p>
      </Card>
    </>
  );
};

const Title = styled.h1`
  margin: 1rem 3rem;
  font-size: 2rem;
`;

const Image = styled.img`
  margin: 1.5rem auto;
  width: 70%;
  height: 50%;
  border-radius: 0.5rem;
`;

const Sub = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export default About;
