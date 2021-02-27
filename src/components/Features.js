import React from "react";
import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
const Features =()=>{
  return<section className="home-features" id="home-features">
  <div className="home-feature">
  <h3 className="home-feature__header header-3">100% Responsive</h3>
  <p className="home-feature__text text-body">
  No matter which the device you’re on, our site is fully responsive and stories
  look beautiful on any screen.
  </p>
  <img src={responsive} alt="" className="home-feature__image"/>
  </div>
  <div className="home-feature">
  <h3 className=" home-feature__header header-3">
  No Photo Upload Limit
  </h3>
<p className="home-feature__text text-body">
Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share
all of your stories in one go.
</p>
  <img src={noLimit } alt="" className="home-feature__image"/>
  </div>
  <div className="home-feature">
  <h3 className="home-feature__header header-3">
  Available to Embed
  </h3>
  <p className="home-feature__text text-body">
  Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google
  Maps, and more.
  </p>
  <img src={embed} alt="" className="home-feature__image"/>
  </div>
  </section>
}
export default Features;
