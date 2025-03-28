import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "@/features/userSlice";
import toast from "react-hot-toast";
import UpdateUser from "./ui/UpdateUser";

function UserTable({ users }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("Id to be deleted: ", id);
    dispatch(deleteUser(id))
      .unwrap()
      .then(() => {
        toast.success("User deleted successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleUpdate = (id, updatedUserData) => {
    console.log("Id to be updated: ", id);
    console.log("Updated user data: ", updatedUserData);

    dispatch(updateUser({ id, data: updatedUserData }))
      .unwrap()
      .then(() => {
        toast.success("User updated successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Avatar</TableHead>
          <TableHead>Admin Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.data?.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.first_name}</TableCell>
            <TableCell className="font-medium">{user.last_name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <div className="flex gap-4 items-center">
                <Button
                  className="bg-red-500 hover:bg-red-500"
                  onClick={() => {
                    console.log("User to be deleted: ", user);
                    handleDelete(user.id);
                  }}
                >
                  <Trash2 />
                </Button>
                <UpdateUser user={user} handleUpdateUser={handleUpdate} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default UserTable;
