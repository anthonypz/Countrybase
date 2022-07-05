const FindCountries = ({ handleInput, input }) => {
  return (
    <div>
      <label htmlFor="country">Find countries</label>
      <input
        id="country"
        onChange={handleInput}
        value={input}
        type="text"
        placeholder="country name"
      />
    </div>
  );
};

export default FindCountries;
