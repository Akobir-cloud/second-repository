import { useEffect } from "react";
import { getContacts } from "../../store/contactSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

const Contacts = () => {
  const dispatch = useAppDispatch<any>();

  const { contacts, loading } = useAppSelector(
    (state: any) => state.contact
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-black p-10">
      <h1 className="text-3xl text-white mb-8">
        Contact Users
      </h1>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid gap-5">
          {contacts.map((item: any) => (
            <div
              key={item._id}
              className="bg-[#0e1d28] p-5 rounded-xl"
            >
              <h2 className="text-white text-xl">
                {item.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {item.phone}
              </p>

              <p className="text-blue-400 mt-1">
                {item.model}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;