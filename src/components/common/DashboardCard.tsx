import React from 'react';
import './dashboardCard.css';

interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: string;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div className="dashboard-card" style={{flexDirection: "column", paddingTop: 25, paddingBottom: 60}} onClick={onClick} role="button" tabIndex={0} onKeyPress={(e) => { if ((e as React.KeyboardEvent).key === 'Enter') onClick && onClick(); }}>
      {icon && <img src={icon} alt="" className="dashboard-card-icon" />}
      <div className="dashboard-card-body">
        <h3 className="dashboard-card-title">{title}</h3>
        {description && <p className="dashboard-card-desc">{description}</p>}
      </div>
    </div>
  );
};

export default DashboardCard;
