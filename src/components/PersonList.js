import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import InputSearch from "./InputSearch";
import PersonCard from "./PersonCard";
import * as R from "ramda";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const Grid = styled.div`
  max-width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 24px;
`;

const PersonList = () => {
  const users = useSelector(({ users }) => users.list);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState("asc");

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = useCallback(
    (e) => {
      const searchedValue = e.target.value.toLowerCase();
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.first.toLowerCase().includes(searchedValue) ||
            user.name.last.toLowerCase().includes(searchedValue)
        )
      );
    },
    [users]
  );

  const userList = useMemo(() => {
    return R.sort(
      sortedUsers === "asc"
        ? R.ascend(R.prop("email"))
        : R.descend(R.prop("email")),
      filteredUsers || []
    );
  }, [filteredUsers, sortedUsers]);

  return (
    <>
      <Wrapper>
        <InputSearch placeholder="Search by name" onChange={handleSearch} />
        <select
          style={{
            width: 180,
            marginLeft: 50,
            padding: 10,
            border: "1px solid #406eff",
            borderRadius: 5,
          }}
          defaultValue={sortedUsers}
          onChange={(e) => setSortedUsers(e.target.value)}
        >
          <option value="asc">Sort by Email Asc</option>
          <option value="desc">Sort by Email Desc</option>
        </select>
      </Wrapper>
      <Grid>
        {userList &&
          userList.map((user) => (
            <PersonCard key={user.login.uuid} user={user} />
          ))}
      </Grid>
    </>
  );
};

export default PersonList;
