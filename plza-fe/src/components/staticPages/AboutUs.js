import React from "react";
import { Grid, Image, Button, Header } from "semantic-ui-react";

//Importing profile images
import rf from "../../media/rf.jpg";
import jh from "../../media/jh.png";
import jl from "../../media/jl.jpg";
import cs from "../../media/cs.jpg";
import ss from "../../media/profile.png";

//Constants for URLs
//Robin
const rfgh = "https://github.com/rfamilara";
const rfli = "https://www.linkedin.com/in/rf2017/";
const rftw = "https://twitter.com/Niborhoods";

//Jordan
const jhgh = "https://github.com/thejhubbs";

//Justin
const jlgh = "https://github.com/JCBLandry";
const jltw = "https://twitter.com/MelonRats";

//Curtis
const csgh = "https://github.com/curtdragon";
const cstw = "https://twitter.com/curtdragon";
const csli = "https://www.linkedin.com/in/curtis-scafe-web-developer/";
const csws = "https://curtiscancode.dev/";

//Spencer 
const ssgh = "https://github.com/grenuttag";
const ssws = "https://spencer.summerville.dev";

export default function AboutUs() {
  return (
    <div style={{ textAlign: "center" }}>
      <Header as="h1">Meet the Team</Header>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Header as="h2">Robin Familara</Header>
            <Image src={rf} size="small" bordered centered circular />
            <Button
              basic
              href={rfgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={rftw}
              target="_blank"
              circular
              size="large"
              icon="twitter"
            />
            <Button
              basic
              href={rfli}
              target="_blank"
              circular
              size="large"
              icon="linkedin"
            />
            <Header as="h4">
              I’m a loyal Pelicans/Saints fan. My hobby is watching epic battles
              among Marvel superheroes and villains on YouTube while eating
              pizza.
              <br></br>
              Online research beast. I love discussing and learning a tech
              stacks and other tech topics.
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Header as="h2">Jordan Hubbard</Header>
            <Image src={jh} size="small" bordered centered circular />
            <Button
              basic
              href={jhgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Header as="h4">
              I do art, tech, music, and tv. I like figuring out how things
              work, and then building and creating things with em.
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Header as="h2">Justin Landry</Header>
            <Image src={jl} size="small" bordered centered circular />
            <Button
              basic
              href={jlgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={jltw}
              target="_blank"
              circular
              size="large"
              icon="twitter"
            />
            <Header as="h4">Fighting games, LARP, Proper pizza</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h2">Curtis Scafe</Header>
            <Image src={cs} size="small" bordered centered circular />
            <Button
              basic
              href={csgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={cstw}
              target="_blank"
              circular
              size="large"
              icon="twitter"
            />
            <Button
              basic
              href={csli}
              target="_blank"
              circular
              size="large"
              icon="linkedin"
            />
            <Button
              basic
              href={csws}
              target="_blank"
              circular
              size="large"
              icon="globe"
            />
            <Header as="h4">
              Born in Jamaica, grew up in NJ, currently in Nashville.
              <br></br>
              Gearhead\car guy. Love to hike. Foodie and runner.
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Header as="h2">Spencer Summerville</Header>
            <Image src={ss} size="small" bordered centered circular />
            <Button
              basic
              href={ssgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={ssws}
              target="_blank"
              circular
              size="large"
              icon="globe"
            />
            <Header as="h4">Pizza and programming aficionado.</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
