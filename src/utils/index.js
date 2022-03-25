// Fetch requests here

//Create user
export const createUser = async (username, email, password, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    setUser(data.user);
    //Below - storing data in database in json format, unique id with token
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

//Login
export const login = async (username, password, setUser) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    setUser(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

//tokenLogin
export const tokenLogin = async (setUser) => {
  try {
    //fetch request
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setUser(data.user);
  } catch (error) {
    console.log(error);
  }
};

//create missing person
export const createMissingPerson = async (
  name,
  userId,
  picURL,
  missingSince,
  missingFrom,
  ageAtDisappearance
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}missing`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        ageAtDisappearance: ageAtDisappearance,
        picURL: picURL,
        userId: userId,
        missingSince: missingSince,
        // publicVisible: publicVisible,
        missingFrom: missingFrom,
      }),
    });
    const data = await response.json();

    // setMissingPerson(data);
  } catch (error) {
    console.log(error);
  }
};

// List all missing people
export const listMissingPeople = async (
  filterKey,
  filterVal,
  setMissingPersons
) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}missing/filtered`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filterKey: filterKey,
          filterVal: filterVal,
        }),
      }
    );

    const data = await response.json();
    setMissingPersons(data);
  } catch (error) {
    console.log(error);
  }
};
