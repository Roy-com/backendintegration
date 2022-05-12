import React from "react";

export default function Login() {
  return (
    <>
      <section className="loginformofAdmin">
        <form id="form" className="adminform">
          <div className="usernameofAdmin">
            <input
              type="text"
              name="username"
              id="NAME"
            
              placeholder="USERNAME"
            />
          </div>
          <div className="PasswordofAdmin">
            <input
              type="text"
              name="email"
              id="PASSWORD"
             
              placeholder="PASSWORD"
            />
          </div>

          <button type="submit" id="submitbuttonoflogin">
            Send
          </button>
        </form>
      </section>
    </>
  );
}
