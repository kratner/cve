import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="logo">Company Logo</div>
        <nav className="navigation">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Dashboard Panels */}
      <div className="dashboard-panels">
        <div className="row">
          <div className="col-md-6">
            <div className="panel">Panel 1</div>
          </div>
          <div className="col-md-6">
            <div className="panel">Panel 2</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="panel">Panel 3</div>
          </div>
          <div className="col-md-6">
            <div className="panel">Panel 4</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Risk Horizon. All rights reserved.
        </div>
        <nav className="footer-links">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Dashboard;
