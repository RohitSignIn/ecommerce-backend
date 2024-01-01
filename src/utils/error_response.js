function errorResponse(reasonPhrase, error) {
  return {
    success: false,
    message: reasonPhrase,
    data: {},
    error: error,
  };
}

module.exports = errorResponse;
