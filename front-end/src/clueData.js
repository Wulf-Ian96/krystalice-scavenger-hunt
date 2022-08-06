// import your images here from the images folder like so

import image1 from "./images/image-1.jpg";
import image2 from "./images/Image-2.jpg";
import image3 from "./images/image-3.jpg";
// end of image imports

//  With this you will structure your clues like so in key:value pairs.
//  the "key" (first item on the left of the :) needs to be identical when creating new cluecards
// Everything else can be the same and will need to be a string, except for the image that will be the same name you import it as

const clueData = [
  {
    clueNum: "Clue 1",
    clueImg: image1,
    clueTxt:
      "Duis cillum nisi sint officia pariatur ea id dolore proident eu tempor. Anim consequat excepteur pariatur reprehenderit incididunt ",
    clueLink:
      "https://www.google.com/maps/@40.8165736,-96.6674976,365m/data=!3m1!1e3",
    cluePassword: "password1",
  },
  {
    clueNum: "clue 2",
    clueImg: image2,
    clueTxt: "Duis cillum nisi sint officia pariatur ",
    clueLink:
      "https://www.google.com/maps/@40.8165736,-96.6674976,365m/data=!3m1!1e3",
    cluePassword: "password1",
  },
  {
    clueNum: "clue 3",
    clueImg: image3,
    clueTxt: "Duis cillum nisi sint officia pariatur ",
    clueLink:
      "https://www.google.com/maps/@40.8165736,-96.6674976,365m/data=!3m1!1e3",
    cluePassword: "password1",
  },
];

export default clueData;
