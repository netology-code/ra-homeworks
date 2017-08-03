'use strict';

const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;
  const renderFilters = (filters) => {
    return filters.map((filter, i) => {
      const className = filter === selected ? "filter-selected" : "filter";
      return (
        <button
          className={className}
          onClick={() => onSelectFilter(filter)}
          key={`filter-${i}`} >
            {filter}
        </button>
      );
    });
  };

  return (
    <div className="toolbar">
      {renderFilters(filters)}
    </div>
  );
};
