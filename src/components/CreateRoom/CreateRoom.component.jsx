import React from "react";
import {
  RoomWrapper,
  RoomHeader,
  RoomContent,
  Brand,
  BrandLogo,
  BrandName,
  VideoChatIcon,
  FlexItems,
  RoomDesc,
  RoomTag,
  ButtonDiv,
  RoomButtonDiv,
  RoomButton,
  RoomJoin,
} from "./CreateRoom.styles.js";

import { v4 as uuidV4 } from "uuid";

const CreateRoom = (props) => {
  function create() {
    const id = uuidV4();
    props.history.push(`/room/${id}`);
  }

  return (
    <RoomWrapper>
      <RoomHeader>
        <Brand>
          <BrandLogo>
            <VideoChatIcon />
          </BrandLogo>
          <BrandName>Mocha</BrandName>
        </Brand>
      </RoomHeader>
      <RoomContent>
        <FlexItems>
          <RoomDesc>Premium video meetings. Now free for everyone.</RoomDesc>
          <RoomTag>
            We re-engineered the service we built for secure business meetings,
            Google Meet, to make it free and available for all.
          </RoomTag>
          <RoomButtonDiv>
            <ButtonDiv>
              <RoomButton onClick={create}>New Meeting </RoomButton>
            </ButtonDiv>
            <ButtonDiv>
              <RoomJoin></RoomJoin>
            </ButtonDiv>
          </RoomButtonDiv>
        </FlexItems>
        <FlexItems></FlexItems>
      </RoomContent>
    </RoomWrapper>
  );
};

export default CreateRoom;
