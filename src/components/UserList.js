import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import InputSearch from "./InputSearch";
import UserCard from "./UserCard";
import * as R from "ramda";
import { removeAccents } from "../utils/strings";
import Select from "./Select";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
  padding: 20px;
`;

const NoResults = styled.h4`
  text-align: center;
`;

const UserList = () => {
  const users = useSelector(({ users }) => R.propOr([], "list", users));
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState("asc");

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = useCallback(
    (e) => {
      const searchedValue = removeAccents(e.target.value.toLowerCase());
      setFilteredUsers(
        users.filter(
          (user) =>
            removeAccents(user.name.first.toLowerCase()).includes(
              searchedValue
            ) ||
            removeAccents(user.name.last.toLowerCase()).includes(searchedValue)
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
        <InputSearch placeholder="Search by Name" onChange={handleSearch} />
        <Select
          style={{ marginLeft: 30 }}
          defaultValue={sortedUsers}
          onChange={(e) => setSortedUsers(e.target.value)}
        >
          <option value="asc">Sort by Email Asc</option>
          <option value="desc">Sort by Email Desc</option>
        </Select>
      </Wrapper>
      {userList.length > 0 ? (
        <motion.div variants={container} initial="hidden" animate="visible">
          <Grid>
            {userList.map((user) => (
              <motion.div variants={item}>
                <UserCard key={user.login.uuid} user={user} />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      ) : (
        <NoResults>No Results</NoResults>
      )}
    </>
  );
};

export default UserList;
