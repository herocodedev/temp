module.exports = function APIFeatures(query, queryString) {
  this.query = query;
  this.queryString = queryString;

  // Paginate
  this.paginating = () => {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = limit * (page - 1);
    const result = this.query.limit(limit).skip(skip);
    return this;
  };

  // Count
  this.counting = () => {
    const result = this.query.count();
    return this;
  };
};
