import Place from "@/components/Admin/Place";
import Culture from "@/components/Admin/Culture";
import School from "@/components/Admin/School";
import People from "@/components/Admin/People";
import UserForm from "@/components/Admin/User";

export default function AdminPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserForm />
      <People />
      <Place />
      <Culture />
      <School />
    </div>
  );
}
