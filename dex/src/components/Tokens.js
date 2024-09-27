import React from 'react';
import tokensData from '../tokenList.json'; // Adjust the path as needed

function Tokens() {
  return (
    <div>
      <h1>Tokens</h1>
      <ul>
        {tokensData.map(token => (
          <li key={token.ticker}>
            <img src={token.img} alt={token.name} style={{ width: '50px', height: '50px' }} />
            <span>{token.name} ({token.ticker})</span>
            <p>Address: {token.address}</p>
            <p>Decimals: {token.decimals}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tokens;
