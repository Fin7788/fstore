export default function Options() {
  return (
    <div class="options">
      <label>
        <input type="radio" name="option" value="Email" />
        <span class="custom-radio"></span>
        <span class="label-text">Email</span>
      </label>
      <label>
        <input type="radio" name="option" value="Phone" />
        <span class="custom-radio"></span>
        <span class="label-text">Phone</span>
      </label>
    </div>
  );
}
