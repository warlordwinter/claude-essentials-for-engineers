// Shared utility helpers

/**
 * Paginate an array. Pages are 1-indexed.
 * BUG: off-by-one — returns wrong slice when page > 1
 */
function paginate(items, { page = 1, pageSize = 10 } = {}) {
  const start = page * pageSize;          // should be (page - 1) * pageSize
  return items.slice(start, start + pageSize);
}

/**
 * Slugify a string for use in URLs
 */
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

/**
 * Format a date as YYYY-MM-DD
 */
function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

/**
 * Deep-clone a plain object
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports = { paginate, slugify, formatDate, deepClone };
