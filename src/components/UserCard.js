import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import editIcon from "../assets/edit.svg";
import { updateUser } from "../store/actions/users";
import Button from "./Button";
import Input from "./Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 300px;
  width: 100%;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const Header = styled.div`
  position: relative;
  padding: 5px;
  height: 80px;
  border-radius: 5px 5px 0px 0px;
  background: #406eff;
  display: flex;
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Name = styled.p`
  text-align: center;
  position: relative;
  width: 100%;
  margin-top: 10px;
  font-size: 20px;
  color: white;
`;

const Item = styled.span`
  width: 100%;
  color: gray;
  margin-bottom: 10px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
`;

const EditIcon = styled.img`
  width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
`;

const Avatar = styled.div`
  position: relative;
  bottom: 35px;
  text-align: center;
`;

const EditCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  max-width: 300px;
  width: 100%;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  height: 100%;
  min-height: 291px;
`;

const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Image = styled.img`
  border-radius: 100%;
  border: 2px solid white;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.3);
`;

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [firstEdit, setFirstEdit] = useState(user.name.first);
  const [lastEdit, setLastEdit] = useState(user.name.last);
  const [emailEdit, setEmailEdit] = useState(user.email);
  const [cellEdit, setCellEdit] = useState(user.cell);

  return (
    <>
      {isEditing ? (
        <EditCard>
          <Input
            defaultValue={firstEdit}
            onChange={(e) => setFirstEdit(e.target.value)}
          />
          <Input
            defaultValue={lastEdit}
            onChange={(e) => setLastEdit(e.target.value)}
          />
          <Input
            defaultValue={emailEdit}
            onChange={(e) => setEmailEdit(e.target.value)}
          />
          <Input
            defaultValue={cellEdit}
            onChange={(e) => setCellEdit(e.target.value)}
          />
          <WrapperButtons>
            <Button onClick={() => setIsEditing(!isEditing)}>Cancel</Button>
            <Button
              type="primary"
              onClick={() => {
                dispatch(
                  updateUser(user.login.uuid, {
                    firstEdit,
                    lastEdit,
                    emailEdit,
                    cellEdit,
                  })
                );
                setIsEditing(false);
              }}
            >
              Save
            </Button>
          </WrapperButtons>
        </EditCard>
      ) : (
        <Wrapper>
          <Header>
            <EditIcon
              src={editIcon}
              alt="Edit"
              onClick={() => setIsEditing(!isEditing)}
            />
            <Name>{`${user.name.first} ${user.name.last}`}</Name>
          </Header>
          <Avatar>
            <Image width={90} src={user.picture.thumbnail} alt="Avatar" />
          </Avatar>
          <Content>
            <Item>{user.email}</Item>
            <Item>{user.cell}</Item>
            <Item>{`${user.location.city}, ${user.location.country}`}</Item>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default UserCard;
