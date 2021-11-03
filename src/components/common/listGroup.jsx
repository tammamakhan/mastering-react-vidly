import React from "react";

const ListGroup = ({
  groups,
  textProperty,
  valueProperty,
  currentGroup,
  onGroupSelect,
}) => {
  return (
    <ul className="list-group">
      {groups.map((group) => (
        <li
          key={group[valueProperty]}
          className={
            group === currentGroup
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGroupSelect(group)}
          style={{ cursor: "pointer" }}
        >
          {group[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
