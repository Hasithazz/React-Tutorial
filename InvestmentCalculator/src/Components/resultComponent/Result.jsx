import { formatter } from '../../util/investment';

export default function Result({ data }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result, index) => (
          <tr key={index}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>
              {formatter.format(
                result.valueEndOfYear -
                  (result.initialInvestment +
                    result.annualInvestment * (index + 1))
              )}
            </td>
            <td>
              {formatter.format(
                result.initialInvestment + result.annualInvestment * (index + 1)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
