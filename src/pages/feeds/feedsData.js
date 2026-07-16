import img01 from "../../assets/feeds/IMG_20260716_112953.jpg";
import img02 from "../../assets/feeds/IMG_20260716_113126.jpg";
import img03 from "../../assets/feeds/IMG_20260716_113349.jpg";
import img04 from "../../assets/feeds/IMG_20260716_113815.jpg";
import img05 from "../../assets/feeds/IMG_20260716_114040.jpg";
import img06 from "../../assets/feeds/IMG_20260716_114350.jpg";
import img07 from "../../assets/feeds/IMG_20260716_114907.jpg";
import img08 from "../../assets/feeds/IMG_20260716_115100.jpg";
import img09 from "../../assets/feeds/IMG_20260716_121202.jpg";
import img10 from "../../assets/feeds/IMG_20260716_121340.jpg";
import img11 from "../../assets/feeds/IMG_20260716_121447.jpg";
import img12 from "../../assets/feeds/IMG_20260716_121844.jpg";
import img13 from "../../assets/feeds/IMG_20260716_122038.jpg";
import img14 from "../../assets/feeds/IMG_20260716_122136.jpg";
import img15 from "../../assets/feeds/IMG_20260113_112338.jpg";
import img16 from "../../assets/feeds/IMG_20211009_214818__01.jpg";
import img17 from "../../assets/feeds/IMG-20220811-WA0006.jpg";
import vid01 from "../../assets/feeds/video_20260716_115928.mp4";
import vid02 from "../../assets/feeds/video_20260716_120919.mp4";
import vid03 from "../../assets/feeds/VID-20230705-WA0012.mp4";
import vid04 from "../../assets/feeds/video_20260113_104623.mp4";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const formatFeedDate = (isoDate) =>
  dateFormatter.format(new Date(isoDate));

const image = (src) => ({ type: "image", src });
const video = (src) => ({ type: "video", src });

export const feedsData = [
  {
    id: 1,
    description: "Durga Namaskaram",
    createdDate: "2022-02-11",
    media: [image(img01), image(img02)],
  },
  {
    id: 2,
    description:
      "Prashna Parihara Puja conducted in Bangalore. Dwadasa nama pooja and homa performed for the devotees.🙌",
    createdDate: "2022-08-09",
    media: [
      image(img08),
      image(img07),
      image(img03),
      image(img17),
      image(img04),
    ],
  },
  {
    id: 3,
    description:
      "A blessed evening of devotion as Bhagavathi Seva was held in Hyderabad, filling hearts with faith, peace, and divine energy. 🪷✨ 🪔",
    createdDate: "2023-07-05",
    media: [image(img06), video(vid01), video(vid03)],
  },
  {
    id: 4,
    description:
      "Sacred Chakrabja Mandalam and Astadala Mandalam prepared with devotion for the divine rituals.",
    createdDate: "2026-07-12",
    media: [image(img16), image(img05)],
  },
  {
    id: 5,
    description:
      "Mahamrityunjaya Homam was held in Trivandrum with devotion, seeking Lord Shiva's blessings for health, peace, and long life. 🕉️🔥\n\nॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात् ॥",
    createdDate: "2026-01-13",
    media: [
      image(img15),
      image(img12),
      image(img14),
      image(img09),
      image(img10),
      image(img11),
      image(img13),
      video(vid02),
      video(vid04),
    ],
  },
];
