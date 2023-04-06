import { useEffect, useState } from "react";
import { StreamClient } from "getstream";
import { StreamApp } from "react-activity-feed";
import { users } from "./users";
import { getFromStorage } from "./utils/storage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StartPage from "./pages/StartPage";
import ScrollToTop from "./components/ScrollToTop";

const APP_ID = "1241926";
const API_KEY = "x2u4y9padhyg";

export default function App() {
  const userId = getFromStorage("user");
  const user = users.find((u) => u.id === userId || users[0]);

  const [client, setClient] = useState(null);

  useEffect(() => {
    const init = async () => {
      const client = new StreamClient(API_KEY, user.token, APP_ID);
      await client.user(user.id).getOrCreate({ ...user, token: "" });

      setClient(client);
    };

    init();
  }, []);

  if (!client) return <></>;

  return (
    <StreamApp token={user.token} appId={APP_ID} apiKey={API_KEY}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
      </Router>
    </StreamApp>
  );
}
