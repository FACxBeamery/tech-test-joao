const getCities = (req, res) => {
  res
    .status(200)
    .json([
      "London",
      "Birmingham",
      "Leeds",
      "Sheffield",
      "Bradford",
      "Manchester",
      "Liverpool",
      "Bristol",
      "Newcastle",
      "Sunderland",
      "Wolverhampton"
    ]);
};

module.exports = getCities;
