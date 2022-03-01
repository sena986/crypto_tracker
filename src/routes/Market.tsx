import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinMarket } from "../api";

const Markets = styled.ul``;

const Marketlist = styled.li``;

interface IMarket {
  exchange_id: string;
  market_url: string;
}

interface MarketProps {
  coinId: string;
}

function Market({ coinId }: MarketProps) {
  const { isLoading, data } = useQuery<IMarket[]>(["url", coinId], () =>
    fetchCoinMarket(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Market..."
      ) : (
        <Markets>
          {data?.slice(0, 100).map((v) => (
            <Marketlist key={v.exchange_id}>
              <a href={v.market_url}>{v.market_url}</a>
            </Marketlist>
          ))}
        </Markets>
      )}
    </div>
  );
}

export default Market;
