import { useContext } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { useStreamContext } from "react-activity-feed";

import More from "../Icons/More";
import Mail from "../Icons/Mail";
import Calendar from "../Icons/Calendar";
import { formatStringWithLink } from "../../utils/strings";
import { ProfileContext } from "./ProfileContent";
import FollowBtn from "../FollowBtn";
