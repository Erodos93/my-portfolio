import createAndShareDesk from "../assets/home/desktop/create-and-share.jpg";
import createAndShareTab from "../assets/home/tablet/create-and-share.jpg";
import createAndShareMob from "../assets/home/mobile/create-and-share.jpg";
import beautifulStoriesDesk from "../assets/home/desktop/beautiful-stories.jpg";
import beautifulStoriesTab from "../assets/home/tablet/beautiful-stories.jpg";
import beautifulStoriesMob from "../assets/home/mobile/beautiful-stories.jpg";
import designedForEveryoneDesk from "../assets/home/desktop/designed-for-everyone.jpg";
import designedForEveryoneTab from "../assets/home/tablet/designed-for-everyone.jpg";
import designedForEveryoneMob from "../assets/home/mobile/designed-for-everyone.jpg";

import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";
import domain from "../assets/features/desktop/custom-domain.svg";
import boostExp from "../assets/features/desktop/boost-exposure.svg";
import dragDrop from "../assets/features/desktop/drag-drop.svg";

export const content=[{
  id:1,
  title:"Create and share your photo Stories.",
  text:"Photosnap is a platform for photographers and visual storytellers. We make it"+
  " easy to share photos, tell stories and connect with others.",
  srcDesktop:createAndShareDesk,
  srcTablet:createAndShareTab,
  srcMobile:createAndShareMob,
  alt:"Create and Share Photo",
  classItemPosition:"",
  classButton:"header-4 btn btn__active home__btn  btn__color--white",
  classArrow:"arrow--white",
  textArrowButton:"Get an invite",
  featureCard:[{
    id:1,
    title:"100% Responsive",
    contentCard:"No matter which the device you’re on, our site is fully responsive and stories"+
      "look beautiful on any"+"screen.",
    img:responsive
  },
  {
    id:2,
    title:"No Photo Upload Limit",
    contentCard: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all"+"of your stories in one go.",
    img:noLimit
  },
  {
    id:3,
    title:"Available to Embed",
    contentCard: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google"+"Maps, and more.",
    img:embed
  },
  {
    id:4,
    title:"Custom Domain",
    contentCard: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    img:domain
  },{
    id:5,
    title:"Boost Your Exposure",
    contentCard: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built "+"in mailing list.",
    img:boostExp
  },{
    id:6,
    title:"Drag & Drop Image",
    contentCard: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    img:dragDrop
  }]

},{
  id:2,
  title:"Beautiful stories every time",
  text:"We provide design templates to ensure your stories look terrific. Easily add "+
  "photos, text, embed maps and media from other networks. Then share your story "+
  "with everyone.",
  srcDesktop:beautifulStoriesDesk,
  srcTablet:beautifulStoriesTab,
  srcMobile:beautifulStoriesMob,
  alt:"Beautiful stories Photo",
  classTitle:"",
  classButton:"header-4 btn btn__active home__btn   btn__color--dark",
  classArrow:"",
  classItemPosition:"flex-position-left",
  textArrowButton:"View the stories"
},{
  id:3,
  title:"Designed for everyone",
  text:"Photosnap can help you create stories that resonate with your audience.  Our "+
  "tool is designed for photographers of all levels, brands, businesses you name it.",
  srcDesktop:designedForEveryoneDesk,
  srcTablet:designedForEveryoneTab,
  srcMobile:designedForEveryoneMob,
  alt:"Beautiful stories Photo",
  classButton:"header-4 btn  btn__active home__btn  btn__color--dark",
  classArrow:"",
  classItemPosition:"",
  textArrowButton:"View the stories"
}
];
