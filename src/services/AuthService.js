
const signUp = async (name, deviceId) => {
    console.log("signUp called");
  const url = 'https://hasura-ofim.onrender.com/v1/graphql';
  const headers = {
    'Content-Type': 'application/json',
    'x-hasura-role': 'user',
      'x-hasura-device-id': deviceId,
    'x-hasura-admin-secret':  process.env.HASURA_SECRET,
  };

const requestBody = {
    query: `
   mutation SignUp($name: String!, $device_id: String!) {
   insert_players_one(
          object: {
            name: $name
            device_id: $device_id
          }
        ) {
          id
          name
        }
      }
    `,
    variables: {
      name: name,
      device_id: deviceId,
    },
};

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });
      console.log("requestBody",requestBody);
      const data = await response.json();
      console.log("data",data);
    return data.data.insert_players_one;
  } catch (error) {
    console.error('Error signing up:', error);
    return null;
  }
};

export { signUp };
