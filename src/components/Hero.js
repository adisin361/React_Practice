import React from "react";
import Hero_pic from "../assets/hero_pic.png"
export default function Hero() {
  return (
    <>
      <div className="container">
        <center>
          <h4 className="my-4">DIJKSTRA'S ALGORITHM</h4>
        </center>
        <center>
          <div id="heroBox">
            <img src={Hero_pic}/>
          </div>
        </center>
        <center>
          <button type="button" className="myButton my-3">
            <b>Get Started</b>
          </button>
        </center>
        <br />
        <br />
      </div>
      <div id="sectionA">
        <span className="line">
          <center>
            <h4 className="ts">WHAT IS DIJKSTRA'S ALGORITHM</h4>
          </center>
        </span>
        <center>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem vero
            fugit accusantium quaerat voluptatibus blanditiis quam architecto.
            Voluptatem non laborum, consequatur, veritatis consectetur rerum
            animi, sequi ab debitis excepturi eum deleniti nisi saepe vero
            eligendi quibusdam enim quas quia repellat commodi. Excepturi earum
            amet consequuntur, in natus distinctio sed repellendus! Repellat,
            error. Ullam nulla officia hic facilis ipsam beatae quia quo
            suscipit, at, distinctio quasi. Est laudantium quidem natus numquam
            dolorem praesentium esse, explicabo optio harum ipsam quae sequi
            impedit quam quisquam illum vitae perferendis. Delectus sapiente
            unde consequatur veniam beatae labore necessitatibus placeat
            nostrum, obcaecati illo temporibus, earum velit!
          </p>
        </center>
      </div>
      <br />
      <br />
      <center>
        <span className="line2"></span>
      </center>
      <div className="container">
        <center>
          <h4 id="yt">IMPORTANT ASPECTS OF DIJKSTRA'S ALGORITHM</h4>
        </center>
        <div className="row">
          <div className="column">
            <div className="card rt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet nobis voluptatum harum veniam aliquam impedit cupiditate ex minima sint quam hic praesentium dolor natus cum, dolorem ea. Odit iure veniam, saepe ducimus debitis ullam. Ad eaque quo non consequuntur natus quos id similique perspiciatis.</div>
          </div>
          <div className="column">
            <div className="card rt2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde corrupti ipsam expedita atque aperiam, aspernatur molestiae a, fugit accusamus nobis voluptate facere modi ullam ut, ad distinctio necessitatibus. Explicabo dicta architecto eos, odio officia modi deserunt corporis ad quam?</div>
          </div>
          <div className="column">
            <div className="card rt3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde corrupti ipsam expedita atque aperiam, aspernatur molestiae a, fugit accusamus nobis voluptate facere modi ullam ut, ad distinctio necessitatibus. Explicabo dicta architecto eos, odio officia modi deserunt corporis ad quam?</div>
          </div>
          <div className="column">
            <div className="card rt4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde corrupti ipsam expedita atque aperiam, aspernatur molestiae a, fugit accusamus nobis voluptate facere modi ullam ut, ad distinctio necessitatibus. Explicabo dicta architecto eos, odio officia modi deserunt corporis ad quam?</div>
          </div>
        </div>

        <center>
        <span className="line2 l2"></span>
      </center>
      </div>
    </>
  );
}
