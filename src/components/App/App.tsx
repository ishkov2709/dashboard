import { User } from "./App.types";

type Props = {
  user: User;
};

function App({ user }: Props) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default App;
