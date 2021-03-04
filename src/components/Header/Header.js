import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";
import {Link} from "react-router-dom";
import CheckButton from "./CheckButton";
const Header =()=>{
  // const togglePageSelector=[".stories",".stories__item",".home-features",".stories__big-collage",".collage",".home__item--1",".home__item--2",".home__item--3"];
  // const removeClassToStories=["","float__center-to-rightSide","float__leftSide-to-center","disapere__story-item","float__rightSide-to-center","float__center-to-leftSide","",""];
  //
  // const addClassToStories=["","float__rightSide-to-center","float__center-to-leftSide","float__down-to-up","float__center-to-rightSide","float__center-to-leftSide",
  // "disapere__home-item","disapere__home-item"];
  // const addClassToHome=["","float__center-to-rightSide","float__leftSide-to-center","disapere__story-item","float__rightSide-to-center","float__leftSide-to-center","",""];
  // const removeClassToHome=["","float__rightSide-to-center","float__center-to-leftSide","float__down-to-up","float__center-to-rightSide","float__center-to-leftSide","disapere__home-item","disapere__home-item"];
  // let nextRemoveClass=0;
  // let nextAddClass=0;
  // const removeClassObj=[{
  //   stories:[]
  // }];
//   const animations=[{
//    page:[{
//      home:"Home",
//      to:{
//        page:"Stories",
//        item:[{
//                 id:1,
//                  className:".stories__item",
//                  animation:{
//                    add:"float__rightSide-to-center",
//                  },
//                   display:"grid"
//                },{
//                  id:2,
//                  className:".stories__big-collage",
//                  animation:{
//                  add:"float__down-to-up",
//                  },
//                  display:"grid"
//                },{
//                    id:3,
//                    className:".stories",
//                    display:"grid"
//                  }]
//      }
//    }]
// }];
  // const animations=[{
  //   page:[{
  //     home:"Home",
  //     to:{
  //       page:"Stories",
  //       item:[{
  //         id:1,
  //         className:".stories__item",
  //         animation:{
  //           add:"float__rightSide-to-center",
  //         },
  //         display:"grid"
  //        },{
  //           id:2,
  //           className:".stories__big-collage",
  //           animation:{
  //             add:"float__down-to-up",
  //           },
  //           display:"grid"
  //       },{
  //             id:3,
  //             className:".home-features",
  //             animation:{
  //               add:"float__center-to-leftSide",
  //             },
  //             display:"none"
  //         },{
  //           id:4,
  //           className:".collage",
  //           animation:{
  //             add:"float__center-to-rightSide",
  //             }
  //       },{
  //           id:5,
  //           className:".home__item--1",
  //           animation:{
  //             add:"float__center-to-leftSide",
  //             }
  //       },{
  //           id:6,
  //           className:".home__item--2",
  //           animation:{
  //             add:"disapere__home-item",
  //             }
  //       },{
  //           id:7,
  //           className:".home__item--3",
  //           animation:{
  //             add:"disapere__home-item",
  //             }
  //       },{
  //           id:8,
  //           className:".stories",
  //           display:"grid"
  //       }]
  //     }
  //   }]
  //   }];
    // function exampl(animations){
    //
    // animations.map(item=>{
    //     console.log(item);
    //
    //   });
    //
    // }
  // exampl(animations.page[0]);
  //OPEN FORM
  const openInviteForm=()=>{
    const displayBack=document.querySelector(".invite__background");
    const displayButton=document.querySelector(".close__btn");
     displayBack.style.display="flex";
     displayButton.style.display="inline-block";
  }
// //
// const isClass=(item,removeClass,addClass)=>{
//   if (addClass && removeClass) {
//     item.classList.remove(removeClass);
//     item.classList.add(addClass);
//   }else if(addClass){
//     console.log("Isnt remove class");
//     item.classList.add(addClass);
//   }else if(removeClass){
//     item.classList.remove(removeClass);
//   }else{
//     return;
//   }
// }

// const switchDisplay=(item,className)=>{
//
//   if (item.classList.contains(className)) {
//
//     if (item.style.display=="grid") {
//       item.style.display="none";
//       return;
//     }else{
//       item.style.display="grid";
//       return;
//     }
//   }
// }
// const arrDate=(opacity)=>{
//   document.querySelectorAll(".collage__label--date").forEach(item=>{
//     item.style.opacity=opacity;
//   });
// }
  // const toggleItem=(selectItem,removeClass,addClass)=>{
  //   const item=document.querySelector(selectItem);
  //   isClass(item,removeClass,addClass);
  //   switchDisplay(item,"home-features");
  //   switchDisplay(item,"stories");
  //   return;
  // }

  // const animationComponents=(addClassArr,removeClassArr)=>{
  //   for (let i = 0; i < togglePageSelector.length; i++) {
  //     for (let j = nextAddClass; j < addClassArr.length; j++) {
  //       for (let k = nextRemoveClass; k < removeClassArr.length; k++) {
  //            toggleItem(togglePageSelector[i],removeClassArr[k], addClassArr[j]);
  //            nextAddClass+=1;
  //            nextRemoveClass+=1;
  //            break;
  //       }
  //     break;
  //     }
  //     if (i===togglePageSelector.length-1) {
  //       nextAddClass=0;
  //       nextRemoveClass=0;
  //     }
  //   }
  // }
  // //LINK TO STORIES
  // const changePageToStories=()=>{
  //   //Show DATE on Story card
  //     arrDate(1);
  //   //ADD and REMOVE class for Animation from Home page to Story Page
  //   animationComponents(addClassToStories,removeClassToStories);
  // }
  // const changePageToStories=()=>{
  //
  //   animations.map((page,index)=>{
  //     page.page[0].to.item.forEach(item=>{
  //       console.log(item.className);
  //       console.log(item.animation);
  //       if (item.display && item.className) {
  //         document.querySelector(item.className).style.display=item.display;
  //       }
  //       if (item.animation && item.className) {
  //             document.querySelector(item.className).classList.add(item.animation.add);
  //             removeClassObj.map(arr=>{
  //               arr.stories.push(item.animation.add);
  //             })
  //           }
  //             // removeStoriesClass.push(item.animation.add);
  //     })
  //     })
  //     console.log(removeClassObj);
  // }
  //LINK TO HOME
  // const backToHome=()=>{
  //   animationComponents(addClassToHome,removeClassToHome);
  //   arrDate(0);
  // }
//   const backToHome=()=>{
//     animations.map((page,index)=>{
//       page.page[0].to.item.forEach(item=>{
//     removeClassObj.map(removeStoryClass=>{
//       console.log(removeStoryClass.stories);
//       removeStoryClass.stories.forEach(arr=>{
//
//         if (item.animation) {
//           document.querySelector(item.className).classList.remove(arr);
//         }
//       })
//     })
//   })
// })

    // animations.map((page,index)=>{
    //   page.page[0].to.item.forEach(item=>{
    //     if (item.display) {
    //       document.querySelector(item.className).style.display=item.display;
    //     }
    //     if (item.animation) {
    //           document.querySelector(item.className).classList.add(item.animation.add);
    //     }
    //   })
    //   })
  // }
const closeMenu=()=>{
  document.querySelector(".menu__checkbox").checked=false;
}
  return <header className="header">
    <CheckButton classButton="menu__btn" classIcon="menu__icon" classCheck="menu__checkbox" idToggle="nav-toggle"/>
    <nav className="mobile__nav header__nav">
    <Link onClick={closeMenu} to="/home"  ><img src={logo} alt="Logo" className="mobile__logo header__logo"/></Link>
    <div className="mobile__list header__list">
    <div className="mobile__links header__links">
    <Link onClick={closeMenu} to="/stories"  className="mobile__link mobile__link--1 header__link"><h4 className="header-4">Stories</h4></Link>
    <Link onClick={closeMenu} to="/features" className="mobile__link mobile__link--2 header__link"><h4 className="header-4">Features</h4></Link>
    <Link onClick={closeMenu} to="/pricing"className="mobile__link mobile__link--3 header__link"><h4 className="header-4">Pricing</h4></Link>
    </div>

    <button onClick={openInviteForm} className="mobile__link btn__dark mobile__btn header__btn text-body">Get an invite</button>

    </div>
    </nav>


   </header>
}
export default Header;
