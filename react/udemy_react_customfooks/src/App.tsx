import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => {
    getUsers();
  }

  return (
    <>
      <h1>カスタムフック</h1>
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        userProfiles.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      )}
    </>
  )
}

export default App
