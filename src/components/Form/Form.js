function FormControl() {
  return (
    <div className="form-group">
      <label htmlFor="phrase">Année de naissance</label>
      <input
        id="inputYear"
        type="number"
        min="1900"
        max="2020"
        step="1"
        className="form-control"
        name="phrase"
      />
    </div>
  );
}

export default FormControl;
