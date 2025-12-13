<div>
      <h1>Welcome to my Register Form</h1>

      <form onSubmit={savedata}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Mobile: </label>
        <input
          type="number"
          name="mobile"
          value={data.mobile}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Gender: </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={data.gender === "other"}
            onChange={handleChange}
          />
          Other
        </label>{" "}
        <br />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Course: </label>
        <select name="course" value={data.course} onChange={handleChange}>
          <option value="">Select Course</option>
          <option value="MERN STACK DEVELOPER">MERN STACK DEVELOPER</option>
          <option value="FULL STACK DEVELOPER">FULL STACK DEVELOPER</option>
          <option value="DATA ANALYSIS">DATA ANALYSIS</option>
        </select>
        <br />
        <br />
        <button type="submit">Save</button>
        <br />
        <br />
      </form>

      <table border={2}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.mobile}</td>
              <td>{i.gender}</td>
              <td>{i.email}</td>
              <td>{i.course}</td>
              <td>
                <button onClick={() => editdata(i.id)}>Edit</button>
                <button onClick={() => deldata(i.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>