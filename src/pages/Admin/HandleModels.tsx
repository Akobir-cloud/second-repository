import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";

import {
  fetchModels,
  addModel,
  deleteModel,
  updateModel,
  type Model,
} from "../../store/modelSlice";

interface Complectation {
  name: string;
  title: string;
  price: string;
}

function HandleModels() {
  const dispatch = useAppDispatch();

  const { models } = useAppSelector(
    (state) => state.models
  );

  const [editId, setEditId] =
    useState<number | null>(null);

  const isEdit = editId !== null;

  // FORM DATA
  const initialData = {
    name: "",
    price: "",
    image: "",
    slug: "",
    complectations: [
      {
        name: "",
        title: "",
        price: "",
      },
    ],
  };

  const [formData, setFormData] =
    useState<Omit<Model, "id">>(
      initialData
    );

  // EDIT DATA
  const [editData, setEditData] =
    useState<Omit<Model, "id">>(
      initialData
    );

  // GET MODELS
  useEffect(() => {
    dispatch(fetchModels());
  }, [dispatch]);

  // ADD MODEL
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isEdit) {
      handleUpdate();
      return;
    }

    await dispatch(addModel(formData));

    setFormData(initialData);
  };

  // EDIT MODEL
  const handleEdit = (model: Model) => {
    setEditId(model.id);

    setEditData({
      name: model.name,
      price: model.price,
      image: model.image,
      slug: model.slug,
      complectations:
        model.complectations || [],
    });
  };

  // UPDATE MODEL
  const handleUpdate = async () => {
    if (editId === null) return;

    await dispatch(
      updateModel({
        id: editId,
        ...editData,
        complectations:
          editData.complectations,
      })
    );

    setEditId(null);

    setEditData(initialData);
  };

  // DELETE MODEL
  const handleDelete = (id: number) => {
    dispatch(deleteModel(id));
  };

  // ADD COMPLECTATION
  const addComplectation = () => {
    if (isEdit) {
      setEditData((prev) => ({
        ...prev,
        complectations: [
          ...prev.complectations,
          {
            name: "",
            title: "",
            price: "",
          },
        ],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        complectations: [
          ...prev.complectations,
          {
            name: "",
            title: "",
            price: "",
          },
        ],
      }));
    }
  };

  // REMOVE COMPLECTATION
  const removeComplectation = (
    index: number
  ) => {
    if (isEdit) {
      const updated = [
        ...editData.complectations,
      ];

      updated.splice(index, 1);

      setEditData({
        ...editData,
        complectations: updated,
      });
    } else {
      const updated = [
        ...formData.complectations,
      ];

      updated.splice(index, 1);

      setFormData({
        ...formData,
        complectations: updated,
      });
    }
  };

  // CHANGE COMPLECTATION
  const handleComplectationChange = (
    index: number,
    field: keyof Complectation,
    value: string
  ) => {
    if (isEdit) {
      const updated = [
        ...editData.complectations,
      ];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      setEditData({
        ...editData,
        complectations: updated,
      });
    } else {
      const updated = [
        ...formData.complectations,
      ];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      setFormData({
        ...formData,
        complectations: updated,
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <h1 className="text-4xl font-bold mb-10">
        Model CRUD
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 mb-10"
      >
        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          value={
            isEdit
              ? editData.name
              : formData.name
          }
          onChange={(e) =>
            isEdit
              ? setEditData({
                  ...editData,
                  name: e.target.value,
                })
              : setFormData({
                  ...formData,
                  name: e.target.value,
                })
          }
          className="border p-3 rounded-lg"
        />

        {/* PRICE */}
        <input
          type="text"
          placeholder="Price"
          value={
            isEdit
              ? editData.price
              : formData.price
          }
          onChange={(e) =>
            isEdit
              ? setEditData({
                  ...editData,
                  price: e.target.value,
                })
              : setFormData({
                  ...formData,
                  price: e.target.value,
                })
          }
          className="border p-3 rounded-lg"
        />

        {/* IMAGE */}
        <input
          type="text"
          placeholder="Image URL"
          value={
            isEdit
              ? editData.image
              : formData.image
          }
          onChange={(e) =>
            isEdit
              ? setEditData({
                  ...editData,
                  image: e.target.value,
                })
              : setFormData({
                  ...formData,
                  image: e.target.value,
                })
          }
          className="border p-3 rounded-lg"
        />

        {/* SLUG */}
        <input
          type="text"
          placeholder="Slug"
          value={
            isEdit
              ? editData.slug
              : formData.slug
          }
          onChange={(e) =>
            isEdit
              ? setEditData({
                  ...editData,
                  slug: e.target.value,
                })
              : setFormData({
                  ...formData,
                  slug: e.target.value,
                })
          }
          className="border p-3 rounded-lg"
        />

        {/* COMPLECTATIONS */}
        <div className="space-y-5">
          {(isEdit
            ? editData.complectations
            : formData.complectations
          ).map((item, index) => (
            <div
              key={index}
              className="border p-5 rounded-xl grid gap-3"
            >
              <input
                type="text"
                placeholder="Complectation Name"
                value={item.name}
                onChange={(e) =>
                  handleComplectationChange(
                    index,
                    "name",
                    e.target.value
                  )
                }
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Title"
                value={item.title}
                onChange={(e) =>
                  handleComplectationChange(
                    index,
                    "title",
                    e.target.value
                  )
                }
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Price"
                value={item.price}
                onChange={(e) =>
                  handleComplectationChange(
                    index,
                    "price",
                    e.target.value
                  )
                }
                className="border p-3 rounded-lg"
              />

              <button
                type="button"
                onClick={() =>
                  removeComplectation(index)
                }
                className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 font-semibold py-3 rounded-xl transition-all duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* ADD COMPLECTATION */}
        <button
          type="button"
          onClick={addComplectation}
          className="flex-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold py-3 rounded-xl transition-all duration-300"
        >
          Komplektatsiya qo'shish
        </button>

        {/* SUBMIT */}
        <button
          type="submit"
          className={`py-3 rounded-xl text-white font-bold ${
            isEdit
              ? "bg-blue-600"
              : "bg-green-600"
          }`}
        >
          {isEdit
            ? "Update Model"
            : "Qo'shish"}
        </button>
      </form>

      {/* MODELS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model) => (
          <div
            key={model.id}
            className="bg-[#111] text-white rounded-2xl overflow-hidden"
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-[250px] object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">
                {model.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {model.price} so'm
              </p>

              {/* COMPLECTATIONS */}
              <div className="mt-5 space-y-3">
                {model.complectations?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="bg-[#222] p-3 rounded-lg"
                    >
                      <h3 className="font-bold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {item.title}
                      </p>

                      <p className="mt-1 text-blue-400">
                        {item.price} so'm
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() =>
                    handleEdit(model)
                  }
                  className="flex-1 bg-blue-500/15 hover:bg-blue-500/25 text-blue-200 border border-blue-400/30 font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(model.id)
                  }
                  className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HandleModels;