export async function seed(knex) {
  await knex('books').del()
  await knex('customers').del()
}