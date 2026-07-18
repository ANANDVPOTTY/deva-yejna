import FeedCard from "./feed-card/FeedCard";
import { feedsData } from "./feedsData";
import {
  FeedsContainer,
  FeedsInner,
  FeedsTitle,
  FeedsSubtitle,
  GoldDivider,
  FeedColumn,
  EndOfFeed,
  OmSymbol,
  EndText,
} from "./Feeds.styles";

const Feeds = () => {
  return (
    <FeedsContainer>
      <FeedsInner>
        <FeedsTitle>Feeds</FeedsTitle>
        <FeedsSubtitle>
          Announcements, moments, and glimpses shared by Deva Yajña.
        </FeedsSubtitle>
        <GoldDivider />

        <FeedColumn>
          {[...feedsData]
            .sort((a, b) => a.id - b.id)
            .map((post) => (
              <FeedCard key={post.id} post={post} />
            ))}

          <EndOfFeed>
            <OmSymbol>ॐ</OmSymbol>
            <EndText>You are all caught up</EndText>
          </EndOfFeed>
        </FeedColumn>
      </FeedsInner>
    </FeedsContainer>
  );
};

export default Feeds;
