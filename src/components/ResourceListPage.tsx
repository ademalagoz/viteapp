import { useQuery } from "react-query";
import { Table, Text } from "@mantine/core";
import axios from "axios";

interface Item {
  id: string;
  last_update: string;
}

type DataResponse = {
  data: Item[];
};

const ResourceListPage = () => {
  const { data, isLoading, error } = useQuery<DataResponse, Error>(
    "resources",
    async () => {
      const response = await axios.get(
        "https://api.spacexdata.com/v4/capsules"
      );
      return response.data;
    }
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const rows = data?.map((element) => (
    <tr key={element.last_update}>
      <td>{element.reuse_count}</td>
      <td>{element.water_landings}</td>
      <td>{element.land_landings}</td>
      <td>{element.last_update}</td>
    </tr>
  ));

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Element name</th>
            <th>Element position</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default ResourceListPage;
