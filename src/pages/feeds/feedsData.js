// Deterministic dummy data for the Feeds (Admin announcements) page.
// Assets are imported so Vite bundles and content-hashes them.
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

export const formatFeedDate = (isoDate) => dateFormatter.format(new Date(isoDate));

const image = (src) => ({ type: "image", src });
const video = (src) => ({ type: "video", src });

export const feedsData = [
  {
    id: 1,
    description:
      "Beautiful sunset captured during today's evening aarti at the temple grounds.",
    createdDate: "2026-07-15",
    media: [image(img01)],
  },
  {
    id: 2,
    description:
      "Glimpses from this morning's Ganapati Homa. May the remover of obstacles bless every household.",
    createdDate: "2026-07-14",
    media: [image(img02), image(img03), image(img04)],
  },
  {
    id: 3,
    description: "A short reel from the Deepa Pooja preparations. 🪔",
    createdDate: "2026-07-13",
    media: [video(vid01)],
  },
  {
    id: 4,
    description:
      "Highlights from the Navaratri decorations across all five shrines. Swipe through the collection.",
    createdDate: "2026-07-12",
    media: [
      image(img05),
      image(img06),
      image(img07),
      image(img08),
      image(img09),
    ],
  },
  {
    id: 5,
    description:
      "Three moments of devotion recorded during the community chanting session.",
    createdDate: "2026-07-11",
    media: [video(vid02), video(vid03), video(vid04)],
  },
  {
    id: 6,
    description:
      "A mixed set from the annual utsavam — photographs and short clips woven together.",
    createdDate: "2026-07-10",
    media: [
      image(img10),
      video(vid01),
      image(img11),
      image(img12),
      video(vid02),
    ],
  },
  {
    id: 7,
    description:
      "The full album from the Rudra Abhishekam: four photographs and two clips capturing the sacred atmosphere.",
    createdDate: "2026-07-09",
    media: [
      image(img13),
      image(img14),
      image(img15),
      image(img16),
      video(vid03),
      video(vid04),
    ],
  },
  {
    id: 8,
    description:
      "Dear devotees,\n\nWe are deeply grateful for your continued participation in our weekly satsang. This month marks a special milestone as we complete one full year of uninterrupted daily prayers at the shrine.\n\nTo commemorate this occasion, we will be hosting a grand community feast (annadanam) next weekend, followed by a special evening of devotional music and discourse. All families are warmly invited to attend and partake in the blessings.\n\nMay the divine grace of the Devas illuminate your path and bring peace, prosperity, and well-being to you and your loved ones. 🙏",
    createdDate: "2026-07-08",
    media: [image(img17)],
  },
];
