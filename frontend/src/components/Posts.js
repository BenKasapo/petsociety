import Contact from "./Contact";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="card-container">
      <h1>TOP LOST PETS HEADLINES</h1>
      <div className="card">
        <section>
          <div className="card-elements">
            <div className="image-container">
              <img src="/images/dog.jpg" alt="Lost Dog" />
            </div>
            <div className="card-text">
              <h1>IBRAHIM</h1>
              <p>
                This dog is lost for days now and please help us find it for us.
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
              </p>
              <h3>Contact +905338330147 </h3>
              <button>COMMENT</button>
            </div>
          </div>
        </section>
        <section>
          <div className="card-elements">
            <div className="image-container">
              <img src="/images/dog.jpg" alt="Lost Dog" />
            </div>
            <div className="card-text">
              <h1>DAISY</h1>
              <p>
                This dog is lost for days now and please help us find it for us.
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
              </p>
              <h3>Contact +905338330147 </h3>
              <button>COMMENT</button>
            </div>
          </div>
        </section>
        <section>
          <div className="card-elements">
            <div className="image-container">
              <img src="/images/dog.jpg" alt="Lost Dog" />
            </div>
            <div className="card-text">
              <h1>JOELLE</h1>
              <p>
                This dog is lost for days now and please help us find it for us.
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
              </p>
              <h3>Contact +905338330147 </h3>
              <button> COMMENT</button>
            </div>
          </div>
        </section>
        <section>
          <div className="card-elements">
            <div className="image-container">
              <img src="/images/dog.jpg" alt="Lost Dog" />
            </div>
            <div className="card-text">
              <h1>BEN</h1>
              <p>
                This dog is lost for days now and please help us find it for us.
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
                This dog is lost for days now and please help us find it for us
              </p>
              <h3>Contact +905338330147 </h3>
              <button>COMMENT</button>
            </div>
          </div>
        </section>
      </div>

      {/* Start of Chats zone */}

      <div className="comments-container">
        <div className="comments">
          <div className="titles">Chat</div>
          <div>yes</div>
          <textarea className="text-area" type="text-area"></textarea>
          <div>hjhjlo</div>
          <button>lorembfgthyjyhyjhn</button>
          <button className="cta-red">ghjhhj</button>
        </div>
        <div className="comments">
          <div className="titles">Chat</div>
          <div>yes</div>
          <textarea className="text-area" type="text-area"></textarea>
          <div>hjhjlo</div>
          <div>lorembfgthyjyhyjhn</div>
          <div>ghjhhj</div>
        </div>
        <div className="comments">
          <div className="titles">Chat</div>
          <div>yes</div>
          <textarea className="text-area" type="text-area"></textarea>
          <div>hjhjlo</div>
          <div>lorembfgthyjyhyjhn</div>
          <div>ghjhhj</div>
        </div>
        <div className="comments">
          <div className="titles">Chat</div>
          <div>Ibrahim</div>
          <textarea className="text-area" type="text-area"></textarea>
          <div>hjhjlo</div>
          <div>lorembfgthyjyhyjhn</div>
          <div>ghjhhj</div>
        </div>
        <div className="comments">
          <div className="titles">Chat</div>
          <div>yes</div>
          <textarea className="text-area" type="text-area"></textarea>
          <div>hjhjlo</div>
          <div>lorembfgthyjyhyjhn</div>
          <div>ghjhhj</div>
        </div>
        <div className="comments">
          <div className="titles">Chat</div>
          <div>yes</div>
          <textarea className="text-area" type="text-area"></textarea>
          <div>hjhjlo</div>
          <div>lorembfgthyjyhyjhn</div>
          <div>ghjhhj</div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Posts;
