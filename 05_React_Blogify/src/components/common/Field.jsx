import React from "react";

function Field({ children, label, error, htmlFor }) {
  const id = htmlFor || getChildId(children);
  return (
    <>
      {label && (
        <label htmlFor={id} className="block mb-2">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p role="alert" className="text-red-500">
          {error.message}
        </p>
      )}
    </>
  );
}
function getChildId(children) {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
}
export default Field;
