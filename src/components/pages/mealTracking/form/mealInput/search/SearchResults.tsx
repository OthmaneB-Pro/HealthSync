export default function SearchResults({
  results,
  handleClick,
}: {
  results: any[];
  handleClick: (item: any) => void;
}) {
  return (
    <ul>
      {results.map((item, index) => (
        <li key={index} onClick={() => handleClick(item)}>
          {item.product_name}
        </li>
      ))}
    </ul>
  );
}
