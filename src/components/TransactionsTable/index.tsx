import { Container } from "./styles";

export function TransactionsTable () {
  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento web site </td>
              <td>R$12.000</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}