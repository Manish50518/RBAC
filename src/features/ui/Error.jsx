import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError();
  return <div>Error is here {error}</div>;
}

export default Error;
