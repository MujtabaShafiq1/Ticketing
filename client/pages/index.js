import axios from "axios";

const HomePage = ({ currentUser }) => {
  console.log(currentUser);
  axios.get("/api/users/currentuser");

  return <h1>Landing Page</h1>;
};

// HomePage.getInitialProps = async () => {
//   const response = axios.get("/api/users/currentuser");
//   return response.data;
// };

export default HomePage;
