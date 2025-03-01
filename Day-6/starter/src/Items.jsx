import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import CustomInstance from "./utils";
const Items = ({ items }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["myTaskKey"],
    queryFn: async () => {
      const {data} = await CustomInstance.get("/");
      return data;
    },
  });
  console.log(data, isLoading);
  return isLoading ? (
    <p>loading .......</p>
  ) : (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
