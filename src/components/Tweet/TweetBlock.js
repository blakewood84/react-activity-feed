import classNames from "classnames";
import { useState } from "react";
import { useStreamContext } from "react-activity-feed";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { formatStringWithLink } from "../../utils/string";
import CommentDialog from "./CommentDialog";
import Comment from "../Icons/Comment";
import Heart from "../Icons/Heart";
import Retweet from "../Icons/Retweet";
import Upload from "../Icons/Upload";
import More from "../Icons/More";
import TweetActorName from "./TweetActorName";
import { generateTweetLink } from "../../utils/links";
