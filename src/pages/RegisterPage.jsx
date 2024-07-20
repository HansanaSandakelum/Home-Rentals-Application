import React from "react";

function RegisterPage() {
  return (
    <div className="register">
      <div className="register_content">
        <form action="">
            <input type="text" placeholder="First Name" name=" firstname" required/>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="First Name"/>
          <a href="/login">Already have an account? log in Here</a>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
