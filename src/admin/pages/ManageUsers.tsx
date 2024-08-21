import React, { useState, useEffect } from "react";
import { auth, db } from "../../config/firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { updatePassword } from "firebase/auth";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Modal from "../../components/Modal";

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const handleDelete = async () => {
    if (selectedUser) {
      try {
        await deleteDoc(doc(db, "users", selectedUser.id));
        setUsers(users.filter((user) => user.id !== selectedUser.id));
        setIsDeleteModalOpen(false);
        setSelectedUser(null);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handlePasswordUpdate = async () => {
    const user = auth.currentUser;
    if (user && newPassword) {
      try {
        await updatePassword(user, newPassword);
        alert("Password updated successfully");
        setNewPassword("");
        setIsChangePasswordModalOpen(false);
      } catch (error) {
        console.error("Error updating password:", error);
      }
    }
  };

  const handleUpdate = async (updates: any) => {
    if (selectedUser) {
      try {
        await updateDoc(doc(db, "users", selectedUser.id), updates);
        setUsers(
          users.map((user) =>
            user.id === selectedUser.id ? { ...user, ...updates } : user
          )
        );
        setIsUpdateModalOpen(false);
        setSelectedUser(null);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <div className="flex flex-col">
              <span className="font-medium text-lg">{user.displayName}</span>
              <span className="text-gray-500">{user.email}</span>
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                onClick={() => {
                  setSelectedUser(user);
                  setIsDeleteModalOpen(true);
                }}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => {
                  setSelectedUser(user);
                  setIsUpdateModalOpen(true);
                }}
              >
                Update Name
              </button>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
                onClick={() => setIsChangePasswordModalOpen(true)}
              >
                Change Password
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <Modal>
          <div className="p-6">
            <h2 className="text-lg font-bold">Confirm Delete</h2>
            <p>Are you sure you want to delete this user?</p>
            <div className="mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors ml-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Update Modal */}
      {isUpdateModalOpen && selectedUser && (
        <Modal>
          <div className="p-6">
            <h2 className="text-lg font-bold">Update User</h2>
            <Formik
              initialValues={{
                displayName: selectedUser.displayName || "",
                email: selectedUser.email || "",
              }}
              validationSchema={Yup.object({
                displayName: Yup.string().notRequired(),
                email: Yup.string()
                  .email("Invalid email address")
                  .notRequired(),
              })}
              onSubmit={(values, { setSubmitting }) => {
                const updates: any = {};
                if (values.displayName)
                  updates.displayName = values.displayName;
                if (values.email) updates.email = values.email;

                handleUpdate(updates);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="text"
                    name="displayName"
                    placeholder="Display Name"
                    className="mb-4 p-2 border rounded-lg w-full"
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="mb-4 p-2 border rounded-lg w-full"
                  />
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                      disabled={isSubmitting}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors ml-2"
                      onClick={() => setIsUpdateModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      )}

      {/* Change Password Modal */}
      {isChangePasswordModalOpen && (
        <Modal>
          <div className="p-6">
            <h2 className="text-lg font-bold">Change Password</h2>
            <Formik
              initialValues={{ newPassword: "" }}
              validationSchema={Yup.object({
                newPassword: Yup.string().required("Password is required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setNewPassword(values.newPassword);
                handlePasswordUpdate();
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    className="mb-4 p-2 border rounded-lg w-full"
                  />
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
                      disabled={isSubmitting}
                    >
                      Change Password
                    </button>
                    <button
                      type="button"
                      className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors ml-2"
                      onClick={() => setIsChangePasswordModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ManageUsers;
