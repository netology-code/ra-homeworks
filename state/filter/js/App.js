'use strict'

const App = props => (
  <div>
    <Toolbar
      filters={props.filters}
      selected={'All'}
      onSelectFilter={(filter) => console.log(filter)} />
    <Portfolio projects={props.projects} />
  </div>
);
