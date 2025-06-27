export default function Register() {
  return (
    <div>
      <label htmlFor="First Name">First Name</label>
      <input type="text" placeholder="First name.." />
      <label htmlFor="Last Name">Last Name</label>
      <input type="text" placeholder="Last name.." />
      <label htmlFor="Phone Number">Phone Number</label>
      <input type="number" placeholder="Phone Number.." />
      <label htmlFor="Date of Birth">Date of Birth</label>
      <input type="date" placeholder="Date of Birth" />
      <label htmlFor="Email">Email</label>
      <input type="email" placeholder="Email.." />
      <label htmlFor="Password">Password</label>
      <input type="password" placeholder="Password.." />
    </div>
  );
}
