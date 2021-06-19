import React from 'react';
import { useUsersQuery } from './generated/graphql';

function App() {
  const {data, loading, error} = useUsersQuery();
  return (
    <p>
      {data?.users[0].firstName}
      <br />
      {data?.users[0].lastName}
    </p>
  );
}

export default App;
