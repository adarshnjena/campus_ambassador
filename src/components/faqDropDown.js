import React from "react";

function faqDropdown({ title, data }) {
  return (
    <div
      tabIndex="0"
      className="tw-collapse tw-w-96 tw-max-w-max tw-border tw-rounded-box tw-border-base-300 tw-collapse-plus"
    >
      <div className="tw-collapse-title tw-text-xl tw-font-medium">{title}</div>
      <div className="tw-collapse-content">
        <p>
            {data}
        </p>
      </div>
    </div>
  );
}

export default faqDropdown;