import Head from 'next/head'
import Navbar from "../components/Navbar";

function about() {
  return (
    <>
    <Head>
      <title>Ninja List | About</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni totam
        repellendus iusto cupiditate expedita excepturi, necessitatibus dolorum
        ad enim amet eveniet illo eum, deleniti saepe vero maiores voluptates
        ipsa earum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum
        voluptatibus quidem, quaerat quia eligendi placeat, dolore, distinctio
        error facere unde. Cumque mollitia iusto porro eaque velit ipsum
        explicabo sit.
      </p>
    </div>
    </>
  );
}

export default about;
