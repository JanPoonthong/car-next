"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const price = e.currentTarget.price.value;
    setResult((price * 0.07).toFixed(2));
  }

  return (
    <>
      <h1>VAT Calculator</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Price: </label>
              </td>
              <td>
                <input type="text" name="price" />
              </td>
            </tr>
            <tr>
              <td>
                <label>VAT: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="vat"
                  defaultValue={process.env.VAT_RATE}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button>Calculate</button>
              </td>
            </tr>
            <tr>
              <td>
                <label>Result: </label>
              </td>
              <td>
                <input type="text" name="result" defaultValue={result} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
