export default function Home() {
  return (
    <>
      <h1>VAT Calculator</h1>
      <form>
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
                <input type="text" name="vat" />
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
                <input type="text" name="result" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
