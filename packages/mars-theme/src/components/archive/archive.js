import React from "react";
import { connect } from "frontity";
import useArchiveInfiniteScroll from "@frontity/hooks/use-archive-infinite-scroll";
import ArchivePage from "./archive-page";

const Archive = () => {
  const {
    pages,
    isFetching,
    isError,
    isLimit,
    fetchNext
  } = useArchiveInfiniteScroll({ limit: 3 });

  return (
    <div>
      {pages.map(({ Wrapper, key, link }) => (
        <Wrapper key={key}>
          <ArchivePage link={link} />
        </Wrapper>
      ))}
      {isFetching && <div>Fetching</div>}
      {isLimit && <button onClick={fetchNext}>Next Page</button>}
      {isError && <button onClick={fetchNext}>Try Again</button>}
    </div>
  );
};

export default connect(Archive);
