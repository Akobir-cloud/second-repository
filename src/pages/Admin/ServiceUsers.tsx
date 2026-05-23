import { useEffect } from "react";

import {fetchRequests,deleteRequest,} from "../../store/requestSlice";

import {useAppDispatch,useAppSelector,} from "../../store/hook";

function  ServiveUsers() {
  const dispatch = useAppDispatch();

  const { requests } =
    useAppSelector(
      (state) => state.requests
    );

  useEffect(() => {
    dispatch(fetchRequests());
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <h1 className="text-4xl font-bold mb-10">
        Requests
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        {requests.map((item) => (
          <div
            key={item.id}
            className="bg-[#111] p-5 rounded-2xl text-white"
          >
            <h2 className="text-2xl font-bold">
              {item.name}
            </h2>

            <p className="mt-2 flex gap-2">
              <h3>Telefon raqam:</h3> {item.phone}
            </p>

            <p className="mt-2 flex  gap-2">
              <h3>Model Nomi</h3>: {item.model}
            </p>

            <p className="mt-2 text-gray-400 flex gap-2">
              <h4>Qo'shimcha izoh:</h4> {item.comment}
            </p>

            <button
              onClick={() =>
                dispatch(
                  deleteRequest(item.id)
                )
              }
            className="w-70 mt-2 bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiveUsers;