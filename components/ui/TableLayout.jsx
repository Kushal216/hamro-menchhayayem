export default function TableLayout({ children, headers }) {
  return (
    <div className="overflow-x-auto rounded-lg ">
      <table className="min-w-full bg-white">
        <thead className="bg-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left border-b font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
