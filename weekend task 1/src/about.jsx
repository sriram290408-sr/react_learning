import "./about.css";
import Product from "./product";

function About() {
  return (
    <div className="container">
      <header className="topbar">
        <div className="left">
          <img src="/src/assets/logo_light.png" alt="logo" />
          <span>LOGO</span>
        </div>

        <div className="right">
          <i className="icon">
            <img src="/src/assets/social_light1.png" alt="social" />
          </i>
          <i className="icon">
            <img src="/src/assets/social_light2.png" alt="social" />
          </i>
        </div>
      </header>
      <div className="user-left">
        <img src="/src/assets/user.png" alt="user" />
        <div className="introduce">
          <h1>Introduce your product</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi in
            repellat suscipit corporis saepe, repellendus, necessitatibus,
            laboriosam dignissimos amet perferendis veniam. Corrupti recusandae
            expedita natus consequuntur voluptatum nulla quis fuga.
          </p>
          <h3 id="head">Sign up</h3>
          <input type="text" placeholder="Name" className="input"></input>{" "}
          <br />
          <input type="text" placeholder="Email" className="input"></input>{" "}
          <br />
          <button className="but">Sign up</button>
        </div>
      </div>
      <div className="about">
        <h2>About section</h2> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          repellat libero sapiente consequuntur fugit ipsam quidem minima ut
          quos unde vel provident voluptate laborum, earum illum dicta similique
          non enim!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          praesentium porro repudiandae corporis voluptatum, iure nostrum
          quaerat possimus fugit quidem eum, voluptas nihil saepe delectus
          molestias accusantium optio ut? Laborum!
        </p>
      </div>
      {Product.map((item) => (
        <div key={item.id} className="product">
          <div className="product-text">
            <h2>Product 1</h2>
            <h4>Description</h4>
            <p className="product-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              quis excepturi dolorum veniam aliquam iste unde corporis,
              praesentium similique quidem aperiam possimus maiores. Blanditiis
              vel alias voluptates quos odio beatae?
            </p>
          </div>
          <img src={item.img} alt="product img" />
        </div>
      ))}
      <div className="cta">
        <div className="cta-text">
          <h2>Get access</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facilis, quisquam voluptates ducimus
            id molestias minus dolorem quidem perferendis illum cum quia est
            porro dolores nesciunt ex laboriosam voluptatum, repudiandae sit!
          </p>
        </div>

        <div className="cta-form">
          <h3>Sign up</h3>
          <input type="text" placeholder="Name" className="ft-input" />
          <input type="text" placeholder="Email" className="ft-input" />
          <button className="ft-but">Sign up</button>
        </div>
      </div>
      <footer>
        <div className="ft-left">
          <img src="/src/assets/logo.png" alt="logo" />
          <span>LOGO</span>
        </div>

        <div className="ft-right">
          <i className="ft-icon">
            <img src="/src/assets/social1.png" />
          </i>
          <i className="ft-icon">
            <img src="/src/assets/social2.png" />
          </i>
        </div>
      </footer>
    </div>
  );
}

export default About;
