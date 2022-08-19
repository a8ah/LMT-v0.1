export const Nation = ({ name, capital, languages, currency, population }) => {

    if (!name) return <div />;
  
    return (
  
      <table>
  
        <tbody>
  
          <tr>
  
            <td>
  
              <h5>{capital}</h5>
  
            </td>
  
            <td>
  
              <h5>{languages}</h5>
  
            </td>
  
            <td>
  
              <h4>{currency}</h4>
  
            </td>
  
            <td>
  
              <p>{population}</p>
  
            </td>
  
          </tr>
  
        </tbody>
  
      </table>
  
    );
  
  };