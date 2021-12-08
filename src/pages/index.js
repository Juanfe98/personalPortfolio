import { About } from '../components/About/About';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = ({projects}) => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects projects={projects} />
      <About />
      <Technologies />
    </Layout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get data
  const projectsResponse = await fetch('http://localhost:3000/api/projects');
  const {data: projects} = await projectsResponse.json()
  return {
    props: {
      projects
    },
  }
}

export default Home;
