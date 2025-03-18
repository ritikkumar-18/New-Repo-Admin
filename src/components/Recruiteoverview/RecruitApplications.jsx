// src/components/Applications.js
import React from 'react';

const Applications = ({ applications = {} }) => {
  // Provide default values for pending, shortlisted, and rejected
  const { pending = [], shortlisted = [], rejected = [] } = applications;

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Pending Applications</h3>
        <ul>
          {pending.map((app, index) => (
            <li key={index} className="text-sm text-gray-600">{app}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Shortlisted Applications</h3>
        <ul>
          {shortlisted.map((app, index) => (
            <li key={index} className="text-sm text-green-600">{app}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Rejected Applications</h3>
        <ul>
          {rejected.map((app, index) => (
            <li key={index} className="text-sm text-red-600">{app}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Applications;