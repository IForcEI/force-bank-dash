import { Link } from "react-router-dom";

function Navigations() {
  return (
    <div className="Navigations">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/Transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/Accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/Investments">Investments</Link>
        </li>
        <li>
          <Link to="/Creditcards">Credit Cards</Link>
        </li>
        <li>
          <Link to="/Loans">Loans</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Myprivileges">My Privileges</Link>
        </li>
        <li>
          <Link to="/Setting">Setting</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigations;
