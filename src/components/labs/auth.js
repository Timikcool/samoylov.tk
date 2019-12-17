import React from 'react';

export const auth = () => {
  return (
    <div>
      <div className="g-signin2" data-onsuccess="onSignIn">
        Google
      </div>
    </div>
  );
};
