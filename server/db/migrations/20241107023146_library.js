/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
  .createTable('books', function(table) {
    table.increments('id')
    table.integer('customer_id').references('customers.id')
    table.string('title')
    table.string('author')
    table.boolean('is_available')
  })
  .createTable('customers', function(table) {
    table.increments('id')
    table.string('name')
    table.string('phone')
    table.string('email')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('books'),knex.schema.dropTable('customers')  
};
