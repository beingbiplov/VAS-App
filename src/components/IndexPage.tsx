import React from 'react';
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div>
        <p>
            <Link to="/login">Login</Link>
        </p>
    </div>
  );
}

export default IndexPage;
