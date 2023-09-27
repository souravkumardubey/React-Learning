const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go ✈️`
          : `🎒 You have ${items.length} items on your list and you have packed
          ${packedItems} (${percentage}%).`}
      </em>
    </footer>
  );
};
export default Stats;
