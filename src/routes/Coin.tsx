import { useParams } from "react-router-dom";

interface RouteParmas {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouteParmas>();
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
