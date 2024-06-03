import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <>
      <div>Navigations</div>
      <h1>Task App</h1>
      <Link to={"/tasks-create"}>Create link</Link>
    </>
  );
}
