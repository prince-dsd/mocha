import styled from "styled-components";
import { VideoChat } from "@styled-icons/remix-fill/VideoChat";
export const RoomWrapper = styled.div``;
export const RoomHeader = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
`;
export const RoomContent = styled.div`
  display: flex;
  height: calc(100vh - 90px);
  min-height: 100%;
  align-items: center;
  margin: 0 100px;
  justify-content: space-between;
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1.5rem;
  color: #878a8e;
`;
export const BrandLogo = styled.div`
  vertical-align: middle;
`;
export const VideoChatIcon = styled(VideoChat)`
  fill: #00796b;
  width: 100px;
  height: 54px;
`;
export const BrandName = styled.div`
  margin-bottom: 5px;
`;
export const FlexItems = styled.div``;
export const RoomDesc = styled.div`
  font-size: 2.75rem;
  font-weight: 400;
  line-height: 3.25rem;
  padding-bottom: 0.5em;
`;
export const RoomTag = styled.div`
  font-weight: 400;
  font-size: 1.25rem;
  color: #5f6368;
  padding-bottom: 3em;
`;
export const RoomButtonDiv = styled.div`
  display: flex;
`;
export const ButtonDiv = styled.div`
  font-weight: 400;
  margin-right: 20px;
`;
export const RoomButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  color: #fff;
  background-color: #00796b;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    opacity: 0.7;
  }
`;
export const RoomJoin = styled.input.attrs({
  placeholder: "Enter a room link",
})`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  color: #5f6368;
  background-color: #eee;

  font-size: 1.2rem;
`;
