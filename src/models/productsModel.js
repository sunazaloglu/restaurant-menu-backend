import knex from "../config/database.js";

export const createProducts = async (products) => {
  const [newItem] = await knex("products").insert(products).returning("*");
  return newItem;
};

export const getAllProducts = async ({
  category,
  showDeleted = "false",
} = {}) => {
  const query = knex("products").select(
    "id",
    "name",
    "price",
    "category_id",
    "deleted_at"
  );

  if (category != null) {
    const categoryId = Number(category);
    if (!Number.isNaN(categoryId)) {
      query.where("category_id", categoryId);
    }
  }
  if (showDeleted === "true") {
  } else if (showDeleted === "onlyDeleted") {
    query.whereNotNull("deleted_at");
  } else {
    query.whereNull("deleted_at");
  }

  return query;
};

export const updateProducts = async (id, products) => {
  const [updateProduct] = await knex("products")
    .where({ id: id })
    .whereNull("deleted_at")
    .update({ ...products, updated_at: knex.fn.now() })
    .returning("*");
  return updateProduct;
};

export const deleteProducts = async (id) => {
  const [deleted] = await knex("products")
    .where({ id })
    .whereNull("deleted_at")
    .update({ deleted_at: knex.fn.now(), updated_at: knex.fn.now() })
    .returning("*");

  return deleted ?? null;
};

export const getProductById = async (id) => {
  const product = await knex("products")
    .where({ id })
    .whereNull("deleted_at")
    .first();
  return product;
};
