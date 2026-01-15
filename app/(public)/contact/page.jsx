import Titlebar from "@/components/ui/Titlebar";
import TableLayout from "@/components/ui/TableLayout";

export default function ContactsPage() {
  const contacts = [
    {
      id: 1,
      institute: "Menchhayayem Hospital",
      contact_person: "Kushal",
      contact_no: "9812345678",
      email: "abc@gmail.com",
    },
    {
      id: 2,
      institute: "Myanglung Hospital",
      contact_person: "sunil",
      contact_no: "9812345678",
      email: "abc@gmail.com",
    },
    {
      id: 3,
      institute: "Shreejung Hospital",
      contact_person: "Chitra Kumar Wiba",
      contact_no: "9812345678",
      email: "abc@gmail.com",
    },
  ];

  return (
    <>
      <div className="flex-4/5 p-4">
        <Titlebar title="HOSPITAL" />
        <div className="pt-2">
          <TableLayout
            headers={[
              "Institute Name",
              "Contact Person",
              "Phone Number",
              "Email",
            ]}
          >
            {contacts.map((contact) => (
              <tr key={contacts.id} className="hover:bg-gray-200">
                <td className="px-4 py-3 border-b border-gray-100">
                  {contact.institute}
                </td>
                <td className="px-4 py-3 border-b border-gray-100">
                  {contact.contact_person}
                </td>
                <td className="px-4 py-3 border-b border-gray-100">
                  <a href={`tel:${contact.contact_no}`}>{contact.contact_no}</a>
                </td>
                <td className="px-4 py-3 border-b border-gray-100">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </td>
              </tr>
            ))}
          </TableLayout>
        </div>
        <Titlebar title="PALIAK" />
        <Titlebar title="SCHOOLS" />
      </div>
    </>
  );
}
