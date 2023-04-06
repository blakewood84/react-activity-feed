import classNames from "classnames";
import styled from "styled-components";
import { useState } from "react";

export default function FollowBtn({ userId }) {
  const [following, setFollowing] = useState(false);

  return (
    <Container>
      <button
        className={classNames(following ? "following" : "not-following")}
        onClick={() => setFollowing(!following)}
      >
        {following ? (
          <div className="follow-text">
            <span className="follow-text__following">Following</span>
            <span className="follow-text__unfollow">Unfollow</span>
          </div>
        ) : (
          "Follow"
        )}
      </button>
    </Container>
  );
}
