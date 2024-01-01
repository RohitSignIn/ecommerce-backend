function successResponse(property, reasonPhrase, data) {
  return {
    success: true,
    message: `${property}: ${reasonPhrase}`,
    data: data,
    error: {},
  };
}

module.exports = successResponse;
